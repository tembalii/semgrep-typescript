from flask import Flask, request
import urllib.request
dgfgdjd

app = Flask(__name__)

@app.route('/ssrf')
def ssrf():
    target = request.args.get('target')  
    with urllib.request.urlopen(target) as response:  
        return response.read()

if __name__ == '__main__':
    app.run(debug=True, port=5001)
