from flask_app.models.user_model import User
from flask import redirect,render_template,flash,session,request
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt=Bcrypt(app)




@app.route("/")
def home():
    return render_template('index.html')
@app.route("/dashboard")
def dashboard():
    if not 'user_id' in session :
        return redirect('/')
    print(session['user_id'])
    data={'id':session['user_id']}
    print(data)
    logged_user = User.get_by_id(data)
    return render_template("dashboard.html",user=logged_user)

@app.route("/logout",methods=['post'])
def logout():
    session.clear()
    return redirect("/")

@app.route("/users/create" ,methods=['post'])
def create_users():
    data={**request.form}
    print('++++++++',data)
    if User.validate(data):
        pw_hash=bcrypt.generate_password_hash(request.form['password'])
        data = {
            **request.form,
            'password':pw_hash
        }
        print('++++++++',data)
        user_id=User.create(data)
        print('******************************',user_id)
        session['user_id']=user_id
        return redirect("/dashboard")

    return redirect("/")

@app.route("/login",methods=['post'])
def login():
    
    user_from_db = User.get_by_email({'email':request.form['email']})
    print(user_from_db)
    if user_from_db:
        if not bcrypt.check_password_hash(user_from_db.password, request.form['password']):
            flash("Wrong Password !!!","login")
            return redirect('/')
        session['user_id'] = user_from_db.id
        return redirect('/dashboard')
    flash("Wrong email !!!!","login")
    return redirect('/')


      
    
