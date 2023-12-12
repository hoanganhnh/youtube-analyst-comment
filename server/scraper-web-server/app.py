from flask import Flask, jsonify, request, abort, json as jsonFlask
import settings
from kafka import KafkaProducer
import json
import logging

logger = logging.getLogger(__name__)

app = Flask(__name__)

def start_producer():
    try:
        server=settings.KAFKA_SERVER
        producer=KafkaProducer(bootstrap_servers=server, value_serializer=lambda v: json.dumps(v).encode('utf-8'))
        return producer
    except Exception as e:
        print(f'Cannot connect to producer.Encountered Error:\n\t{e}')
        logger.error('Cannot connect to the producer',e)
        exit(1)

producer = start_producer()

@app.errorhandler(400)
def resource_not_found(e):
    return jsonify(error=str(e)), 400

@app.route("/scraper", methods=['POST'])
def handle_scraper():
    data = jsonFlask.loads(request.data.decode(encoding='UTF-8'))
    url = data['url']
    if url is None:
        abort(400, description='url param is required!')
       
    producer.send('url', url)
    producer.flush(1)
    return "oki"

if __name__=='__main__':
    app.run(debug=True, port=5002)