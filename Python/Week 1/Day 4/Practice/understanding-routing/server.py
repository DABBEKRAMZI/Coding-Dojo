from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
@app.route('/dojo')
def hello_dojo():
    return 'Hello dojo!' 
@app.route('/say/<string:name>')
def say_name(name) :
    return f"hi {name}"
@app.route('/repeat/<int:number>/<string:name>')
def say_name_number_times(name,number):
    return  f"hi {name}\n"*number
@app.errorhandler(404) 
def invalid_route(e): 
    return "Sorry! No response. Try again."       

            
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

