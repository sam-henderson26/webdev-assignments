from flask import Flask

Prime_app = Flask(__name__)


@Prime_app.route("/prime_number/<number>")
def prime_number(number):
    num = int(number)
    is_prime = True

    if num < 2:
        is_prime = False
    else:
        for i in range(2, num):
            if num % i == 0:
                is_prime = False
                break

    response = {"Number": num, "isPrime": is_prime}
    return response


if __name__ == "__main__":
    Prime_app.run(host="127.0.0.1", port=3000)