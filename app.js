from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Finance Backend Running"})

@app.route('/test')
def test():
    return jsonify({"status": "API working"})

if __name__ == '__main__':
    app.run(debug=True)