from flask import Flask, Response, json, send_from_directory, request

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
    try:
        arguments = request.args
        number1 = float(arguments.get("number1"))
        number2 = float(arguments.get("number2"))
    

        response_data = {
            "number1": number1,
            "number2": number2,
            "result": number1 + number2
        }
        return response_data
    except ValueError:
            response = {
                "message": "Argument are not numbers",
                "status": 400
            }
            json_response = json.dumps(response)
            http_response = Response(response= json_response, status=400, mimetype="application/json")
            return http_response

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    #make data to json
    json_response = json.dumps(response)
    #make a response
    http_response = Response(response= json_response, status=404, mimetype="application/json")
    return http_response

#start the flask app
app.run(host="127.0.0.1", port=5000, use_reloader=True)
