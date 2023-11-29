import os
from dotenv import load_dotenv
from pprint import pprint

path_env = os.path.join(os.path.dirname(__file__), 'main.env')
load_dotenv(path_env)

KAFKA_SERVER = os.getenv('KAFKA_SERVER').split(',') if os.getenv('KAFKA_SERVER') else []
RAW_TOPIC = os.getenv('TRANSFORM_CONSUME_TOPIC')
ANALYZED_TOPIC = os.getenv('TRANSFORM_PRODUCE_TOPIC')

pprint({
    "KAFKA_SERVER": KAFKA_SERVER,
    "RAW_TOPIC": RAW_TOPIC,
    "ANALYZED_TOPIC": ANALYZED_TOPIC
})


