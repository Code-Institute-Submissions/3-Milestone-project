import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv('MONGO_URI')

mongo = PyMongo(app)

CORS(app)
db = mongo.db.users

@app.route('/users', methods=["POST"])
# Route is gonna creeate user and return id
def createUser():
  id = db.insert({
      "name": request.json['name'],
      "email": request.json['email'],
      "password": request.json['password']
  })
  return jsonify(str(ObjectId(id)))

@app.route('/users', methods=["GET"])
def getUsers():
  return 'something'

@app.route('/users/<id>', methods=["GET"])
def getUser():
  return 'something'

@app.route('/users/<id>', methods=["GET"])
def deleteUser():
  return 'something'

@app.route('/users/<id>', methods=["PUT"])
def updateUser():
  return 'something'

if __name__ == "__main__":
    app.run(debug=True)
