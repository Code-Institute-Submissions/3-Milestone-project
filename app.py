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

@app.route('/', methods=["GET","POST"])
def getpost():
  return 'something'


app.run(debug=True)
