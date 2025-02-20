from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Разрешает запросы с других источников (CORS)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Привет из Flask!", "items": [1, 2, 3, 4, 5, 148]}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
