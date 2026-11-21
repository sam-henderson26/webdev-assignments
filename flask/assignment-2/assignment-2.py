import json
from flask import Flask

translation_app = Flask(__name__)

with open("dictionary.json") as file:
    dictionary = json.load(file)

@translation_app.route("/translate/<word>")
def translate(word):
    word = word.lower()
    if word not in dictionary:
        return {"error": "Word not found"}, 404
    return {"English": word, "Finnish": dictionary[word]}

if __name__ == "__main__":
    translation_app.run(host="127.0.0.1", port=3000)