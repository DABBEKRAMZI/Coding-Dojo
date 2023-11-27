from flask import Flask,render_template, request, redirect
from user_model import User

app= Flask(__name__)

@app.route('/')
def ahla():
    return redirect('/users')

@app.route('/users')
def all_users():
    return render_template('index.html', users=User.get_all())

@app.route('/user/new')
def create():
   return render_template('create_user.html')

@app.route('/user_created',methods=['post'])
def user_created():
    data={**request.form}
    id=User.save(data)
    print(id)
   
    
    return redirect(f"/users/{id}")

@app.route('/users/<int:id>')
def show(id):
    data={'id':id}
    return render_template('show_user.html',user=User.get_by_id(data))

@app.route('/user/delete/<int:id>')
def delete(id):
    data={'id':id}
    User.delete_by_id(data)
    return redirect('/users')

@app.route('/users/<int:id>/edit')
def edit(id):
    data={'id':id}
    return render_template('edit.html',user=User.get_by_id(data))

@app.route('/user_updated',methods=['post'])
def update() :
    data={**request.form}
    
    print(data['id'])
    print(data)
    User.update(data)
    id=data['id']

   
    return redirect(f"/users/{id}")


if __name__=="__main__":
    app.run(debug=True)