from flask import Flask, Response, send_from_directory, request

#make new flask app
app = Flask(__name__)


#define endpoint /home
@app.route("/home")
def serve_home():
    return send_from_directory("static", "index.html")

#define endpoint /plus
@app.route("/plus")
def calculate_sum():
    #get the arguments
    arguments = request.args
    number1 = float(arguments.get("number1"))
    number2 = float(arguments.get("number2"))
    response_data = {
        "number1": number1,
        "number2": number2,
        "result": number1 + number2
    }
    return response_data
#start the flask app
app.run(host="127.0.0.1", port=5000, use_reloader=True)
