import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

CORS(app)
db = mongo.db.patients


# Routes
@app.route('/patients', methods=["POST"])
# Func is gonna create patient and return id
def createUser():
    id = db.insert({
        "name_and_surname": request.json['name_and_surname'],
        "eircode": request.json['eircode'],
        "phone_number": request.json['phone_number'],
        "date_of_birth": request.json['date_of_birth']
    })
    return jsonify(str(ObjectId(id)))


@app.route('/patients', methods=['GET'])
def getUsers():
# Func is gonna list all patients in the database
    patient = []
    for doc in db.find():
        patient.append({
            '_id': str(ObjectId(doc['_id'])),
            'name_and_surname': doc['name_and_surname'],
            'eircode': doc['eircode'],
            "phone_number": doc['phone_number'],
            "date_of_birth": doc['date_of_birth']
      })
    return jsonify(patient)


@app.route('/patient/<id>', methods=["GET"])
def getUser(id):
# Func is gonna list patient by _id
    patient = db.find_one({'_id': ObjectId(id)})
    return jsonify({
        '_id': str(ObjectId(patient['_id'])),
        'name_and_surname': patient['name_and_surname'],
        'eircode': patient['eircode'],
        "phone_number": patient['phone_number'],
        "date_of_birth": patient['date_of_birth']
    })


@app.route('/patients/<id>', methods=['DELETE'])
def deleteUser(id):
# Func is gonna delete patient by _id
      db.delete_one({'_id': ObjectId(id)})
      return jsonify({
          'message': 'Patient has been deleted'
    })


@app.route('/patients/<id>', methods=['PUT'])
def updateUser(id):
# Func is gonna update patient by _id
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        'name_and_surname': request.json['name_and_surname'],
        'eircode': request.json['eircode'],
        "phone_number": request.json['phone_number'],
        "date_of_birth": request.json['date_of_birth']
    }})
    return jsonify({
        'message': 'Patient has been updated'
    })

@app.route('/')
def index():
    #test route returning welcome.
    return "<h1>Welcome to Diego's App</h1>"

if __name__ == "__main__":
    app.run(debug=True)
