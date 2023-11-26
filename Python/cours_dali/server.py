from flask import Flask ,render_template,redirect 

app=Flask(__name__)
@app.route('/')
def dashboard():
    return render_template('index.html')



if __name__=="main" :
    app.run(debug=True,port=1337)