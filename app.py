import os
from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
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
def createUser():
  return 'something'

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
