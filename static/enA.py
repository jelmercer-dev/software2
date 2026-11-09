from flask import Flask, Response

#make new flask app
app = Flask(__name__)

#start the flask app
app.run(host="127.0.0.1", port=5500, use_reloader=True)