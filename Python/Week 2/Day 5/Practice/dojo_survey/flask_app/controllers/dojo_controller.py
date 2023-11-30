from flask_app.models.dojo_model import Dojo
from flask_app import app
from flask import render_template,redirect,request,session

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/create/dojo",methods=['post'])
def create_dojo():
    if Dojo.validdte_dojo(request.form):
        data={**request.form}
        id=Dojo.create(data)
        return redirect(f"/create/dojo/{id}")
    
    return redirect('/')

@app.route("/create/dojo/<int:id>")
def card_dojo(id):
    data={'id':id}
    return render_template("card_dojo.html",dojo=Dojo.get_by_id(data))
