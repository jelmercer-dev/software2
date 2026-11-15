from flask import Flask, send_from_directory, json, Response, request

app = Flask(__name__)

@app.route("/api/grades")
def get_grades():
    return ("is my grades");

@app.route("/api/people")
def get_people():
    return [{"name": "Alice", "age": 30},
             {"name": "Bob", "age": 25}]

@app.route("/assets/<path:filename>")
def serve_asset(filename):
    return send_from_directory("assets", filename)

@app.route("/<path:filename>")
def serve_from_directory(filename):
    return send_from_directory("html", filename)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, use_reloader=True)