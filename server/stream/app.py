from fastapi import FastAPI,Request, HTTPException
from pymongo import MongoClient
import settings
import uvicorn
from sse_starlette.sse import EventSourceResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from starlette.middleware.trustedhost import TrustedHostMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


print('Connecting to MongoDB:',settings.MONGO_URL)

client = MongoClient(settings.MONGO_URL)
db = client.ptit
message_collection = db.lives
info_collection = db.infos 


async def read_stream():
    change_stream = message_collection.watch()
    while change_stream:
        for change in change_stream:
            print(change['fullDocument'])
            doc=change['fullDocument']
            doc.pop('_id')
            response={"data":doc,"event":"message"}
            yield response
            

@app.get("/stream")
async def stream_changes(request:Request):
    if "text/event-stream" not in request.headers.get("accept", "").lower():
        raise HTTPException(status_code=406, detail="Only accepts text/event-stream")

    # Set response headers for SSE
    headers = {
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "text/event-stream",
        "Transfer-Encoding": "chunked",
    }

    return EventSourceResponse(read_stream(), headers=headers)


@app.get("/video/{video_id}")
async def get_video(video_id: str):
    filter = {"video_id": video_id}
    result = info_collection.find_one(filter)
    result.pop('_id')
    return result


@app.on_event("shutdown")
async def shutdown_event():
    client.close()


if __name__=='__main__':
    uvicorn.run("app:app",port=3000,reload=True)