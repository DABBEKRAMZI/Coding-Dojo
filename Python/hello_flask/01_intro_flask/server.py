from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
# http://127.0.0.1/
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
@app.route('/hello')
def hello():
    return "hello from server "
@app.route('/hello/user')
def say_hello() :
    return "<h1>Hello html </h1"
@app.route('/hello/user/<name>')
def say_hello_name(name) :
    return f"<h1>Hello {name} </h1>"
@app.route('/hello/user/<name>/<int:times>')
def say_hello_name_times(name,times) :
    return f"<h1>Hello {name} </h1>"* times
@app.route('/user/<name>/<int:age>')
def user_info(name,age):
    return f"<h1>name is  {name} <br/> age : {age}</h1>"

@app.route('/index/<name>/<int:age>')
def index(name,age):
    users= [
        {'name':'bilel' ,'age':30},
        {'name': 'ramzi','age':20},
        {'name':'anis' ,'age':10},
        {'name':'ilyes' ,'age':16}
    ]
    return render_template("index.html",user=name ,number= age ,users=users)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=1500)    # Run the app in debug mode.

