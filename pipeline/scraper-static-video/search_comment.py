import googleapiclient.discovery
from datetime import datetime
import logging

import connect_db
from urllib.parse import urlparse, parse_qs
from handle_predict import predict


logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s',
                    handlers=[
                        logging.FileHandler('loader.log'),
                        logging.StreamHandler()
                    ])


logger = logging.getLogger(__name__)

def get_id_video(url):
    u_pars = urlparse(url)
    quer_v = parse_qs(u_pars.query).get('v')
    if quer_v:
        return quer_v[0]
    pth = u_pars.path.split('/')
    if pth:
        return pth[-1]


def build_youtube(API_KEY):
    api_service_name = "youtube"
    api_version = "v3"
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey=API_KEY)
    return youtube


api_key = "AIzaSyA9EQOi3minLTjfA9N_SUDMEYGmCWjyzMA"
youtube = build_youtube(api_key)

def get_comments(video_id, comments=[], token=''):

    video_response=youtube.commentThreads().list(part='snippet',
                                               videoId=video_id,
                                               pageToken=token).execute()
    for item in video_response['items']:
        comment = item['snippet']['topLevelComment']
        text = comment['snippet']['textDisplay']
        comments.append(text)


    if "nextPageToken" in video_response: 
        return get_comments(video_id, comments, video_response['nextPageToken'])
    else:
        return comments


def get_all_comment(linkYoutube: str, comments=[], token=''):
    video_response = youtube.commentThreads().list(
        part='snippet',
        textFormat='plainText',
        videoId=get_id_video(linkYoutube),
        pageToken=token
    ).execute()
    try:
        results = video_response.get('items', [])
        for item in results:
            snippetTopLevelComment=item['snippet']['topLevelComment']
            message_author_name = snippetTopLevelComment['snippet']['authorDisplayName']
            authorAvatarUrl = snippetTopLevelComment['snippet']['authorProfileImageUrl']
            comment = snippetTopLevelComment['snippet']['textDisplay']
            message_dt = snippetTopLevelComment['snippet']['updatedAt']
            author_channel_id = snippetTopLevelComment['snippet']['authorChannelId']['value']

            record = {
                        "video_id": get_id_video(linkYoutube),
                        "message_time_usec": datetime.utcnow().timestamp(),
                        "message_dt": message_dt, 
                        "message_author_name": message_author_name, 
                        "message_content": comment,
                        "author_photo_url": authorAvatarUrl,
                        "author_channel_id": author_channel_id,
                        "info_type": "VIDEO_STATIC_INFO",
                        "timestamp": datetime.utcnow().timestamp(),
                    }
            print(f"Comment: {comment[:50]}...\n")
            predictRecord = predict(record)
            res_db = connect_db.comment_collection.insert_one(predictRecord)
            logger.info(f'Inserted message with ID of:{res_db.inserted_id}')
            comments.append(record)

        if 'nextPageToken' in video_response:
            return get_all_comment(linkYoutube, comments, video_response['nextPageToken'])
        else:        
            return comments
    except KeyboardInterrupt:
            print('Stop!')
            pass


def get_video_info(video_id: str):
    request = youtube.videos().list(
        part="snippet,contentDetails",
        id=video_id
    )
    response = request.execute()
    snippet = response['items'][0]['snippet']
    title = snippet['title']
    channelId = snippet['channelId']
    thumbnail_url = snippet['thumbnails']['default']['url']
    channel_name = snippet['channelTitle']
    video_info = {
        "channel_name": channel_name,
        "channel_url":'https://www.youtube.com/channel/' + channelId,
        "video_id":video_id,
        "video_title":title,
        "video_url": "https://www.youtube.com/watch?v"+video_id,
        "video_thumbnail_url":thumbnail_url,
        "is_live": False
    }
    
    return video_info