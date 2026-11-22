from flask import Flask, Response, json, send_from_directory, request

app = Flask(__name__)

@app.route("/prime_number/<number>")
def prime(number):
    number = int(number)

    is_prime = number >= 2
    for divisor in range(2, int(number ** 0.5) + 1):
        if number % divisor == 0:
            is_prime = False
            break

    response = {
        "number": number,
        "is_prime": is_prime
    }
    return response

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)