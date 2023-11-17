from flask import Flask,render_template, redirect,request, session

app = Flask(__name__)
app.secret_key="ahla w sahla"

@app.route('/')
def index() :
 
    return render_template("index.html")

@app.route('/process', methods=['post'])
def process() :
    print (request.form)
    session["name"]=request.form['name']
    session["age"]=request.form['age']
    session["number"]=request.form['number']
    session["color"]=request.form['color']
    session["food"]=request.form['food']
    session["sport"]=request.form['sport']

    return redirect('/display')

@app.route('/display') 
def display():
    return render_template('display.html')
if __name__ =="__main__" :

    app.run(debug=True,port=5001)

