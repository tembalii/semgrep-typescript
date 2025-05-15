import requests
from flask import Flask, request

app = Flask(__name__)

@app.route('/fetch')
def fetch_data():
    url = request.args.get('url')  # risky: user-controlled input
    response = requests.get(url)   # this is the line Semgrep will flag
    return response.text

if __name__ == '__main__':
    app.run(port=5000)
