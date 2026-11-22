from flask import Flask, json, Response, send_from_directory, request
import os
app = Flask(__name__)

@app.route("/translate/<word>")
def translate(word):

        # Load the dictionary
        with open(os.path.join(os.path.dirname(__file__), "dictionary.json"), encoding="utf-8") as file:
            dictionary = json.load(file)

        # Translate the word
        translated_word = dictionary.get(word.lower())

        if translated_word is None:
             return {"error": "word not found"}, 404
        return {"English": word, "Finnish": translated_word}

@app.route("/words")
def get_words():
    with open(os.path.join(os.path.dirname(__file__), "dictionary.json"), "r", encoding="utf-8") as file:
        dictionary = json.load(file)
    return dictionary



if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)