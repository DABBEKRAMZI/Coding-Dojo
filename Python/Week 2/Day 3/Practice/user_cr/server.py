from flask import Flask,render_template, request, redirect
from user_model import User

app= Flask(__name__)


@app.route('/users')
def all_users():



    return render_template('index.html', users=User.get_all())

@app.route('/create_user')
def create():
   return render_template('create_user.html')

@app.route('/user_created',methods=['post'])
def user_created():
    data={**request.form}
    User.save(data)
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)