import os
from dotenv import load_dotenv

path_env = os.path.join(os.path.dirname(__file__), 'main.env')
load_dotenv(path_env)

KAFKA_SERVER = os.getenv('KAFKA_SERVER').split(',') if os.getenv('KAFKA_SERVER') else []