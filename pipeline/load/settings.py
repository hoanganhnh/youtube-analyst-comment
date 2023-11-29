import os
from dotenv import load_dotenv
from pprint import pprint

path_env = os.path.join(os.path.dirname(__file__), 'main.env')
load_dotenv(path_env)

KAFKA_SERVER = os.getenv('KAFKA_SERVER').split(',') if os.getenv('KAFKA_SERVER') else []
ANALYZED_TOPIC = os.getenv('LOAD_CONSUME_TOPIC')
MONGO_DB_URL = os.getenv('MONGO_DB_URL')

print('Loaded Settings:')
pprint({
    'ANALYZED_TOPIC':ANALYZED_TOPIC,
    'KAFKA_SERVER':KAFKA_SERVER,
    'MONGO_DB_URL':MONGO_DB_URL,
})
