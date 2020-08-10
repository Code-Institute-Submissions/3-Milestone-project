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
# Func is gonna create user and return id
def createUser():
  id = db.insert({
      "name": request.json['name'],
      "email": request.json['email'],
      "password": request.json['password']
  })
  return jsonify(str(ObjectId(id)))


@app.route('/users', methods=['GET'])
def getUsers():
# Func is gonna list all users in the database
  users = []
  for doc in db.find():
      users.append({
          '_id': str(ObjectId(doc['_id'])),
          'name': doc['name'],
          'email': doc['email'],
      })
  return jsonify(users)


@app.route('/user/<id>', methods=["GET"])
def getUser(id):
# Func is gonna list user by _id
  user = db.find_one({'_id': ObjectId(id)})
  return jsonify({
      '_id': str(ObjectId(user['_id'])),
      'name': user['name'],
      'email': user['email'],
  })

@app.route('/users/<id>', methods=["GET"])
def deleteUser():
  return 'something'

@app.route('/users/<id>', methods=["PUT"])
def updateUser():
  return 'something'

if __name__ == "__main__":
    app.run(debug=True)
