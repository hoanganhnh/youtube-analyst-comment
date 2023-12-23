from pymongo import MongoClient
import settings

print('Connecting to MongoDB:',settings.MONGO_URL)

client = MongoClient(settings.MONGO_URL)
db = client.ptit
video_collection = db.videos 
comment_collection = db.comments