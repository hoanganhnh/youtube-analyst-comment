from flask import jsonify, Flask, request
import logging
from flask_cors import CORS, cross_origin

import connect_db
from search_comment import get_all_comment, get_video_info


logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s',
                    handlers=[
                        logging.FileHandler('loader.log'),
                        logging.StreamHandler()
                    ])


logger = logging.getLogger(__name__)

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/analyst-comment/', methods=[ 'POST'])
@cross_origin()
def get_comments_from_youtube():
    url = request.args.get('url')
    comments = get_all_comment(url)

    return "success"


@app.route('/api/static-video/<id>', methods=['POST'])
@cross_origin()
def save_info_static_video(id: str):
    video = get_video_info(id)
    response = connect_db.video_collection.insert_one(video)
    logger.info(f'Inserted message with ID of:{response.inserted_id}')
    return "success"


if __name__ == "__main__":
    app.run(debug=True, port=5005)
