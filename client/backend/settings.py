import os
from dotenv import load_dotenv

path_env = os.path.join(os.path.dirname(__file__), 'main.env')
load_dotenv(path_env)


MONGO_URL=os.getenv('MONGO_URL')

    