import socketio

import logging

sio = socketio.Client()

def handle_connect(sid):
    logging.info(f"Socket connected with sid {sid}")

class SocketManager:
    def __init__(self, origins: list[str]):
        self.server = socketio.AsyncServer(
            cors_allowed_origins=origins,
            async_mode="asgi",
            logger=True,
            engineio_logger=True,
        )
        self.app = socketio.ASGIApp(self.server)

    @property
    def on(self):
        return self.server.on

    @property
    def send(self):
        return self.server.send

    def mount_to(self, path: str, app):
        app.mount(path, self.app)


socket_manager = SocketManager(['http://localhost:5173/'])
socket_manager.on("connect", handler=handle_connect)