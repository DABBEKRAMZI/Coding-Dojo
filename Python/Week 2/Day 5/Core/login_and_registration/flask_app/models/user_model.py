from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE 
import re	  
# create a regular expression object that we'll use later
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class User :
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.email=data_dict['email']
        self.password=data_dict['password']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['update_at']
    #create user
    @classmethod 
    def create(cls,data):
        query='''INSERT INTO users (first_name,last_name,email,password)
        VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);'''
        return connectToMySQL(DATABASE).query_db(query,data)
    

    #get one user by email 
    @classmethod
    def get_by_email (cls,data):
        query = """ SELECT * FROM users WHERE email=%(email)s; """
        db_result = connectToMySQL(DATABASE).query_db(query, data)
        print("🔥🔥🔥🔥🔥🔥🔥🔥🔥", db_result, "🔥🔥🔥🔥🔥🔥🔥🔥🔥")
        if db_result:
            return cls(db_result[0])
        return False
    
    #get one user by id
    @classmethod
    def get_by_id (cls,data):
        query = """ SELECT * FROM users WHERE id=%(id)s; """
        db_result = connectToMySQL(DATABASE).query_db(query, data)
        print("🔥🔥🔥🔥🔥🔥🔥🔥🔥", db_result, "🔥🔥🔥🔥🔥🔥🔥🔥🔥")
        user = cls(db_result[0])
        return user

    # validation of registration input
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['first_name'])<3 :
            flash('firstname must be at least 3 characters','register')
            is_valid =False
        if len(data['last_name'])<3 :
            flash('last name must be at least 3 characters','register')
            is_valid =False
        if not EMAIL_REGEX.match(data["email"]):
            flash("Email is not valid.","register")
            is_valid = False
        elif User.get_by_email(data):
            flash("this email was used","register")
            is_valid = False
        if len(data['password'])<6:
            flash("password too short !!!","register")
            is_valid = False
        elif data["password"]!= data["confirm_password"]:
            is_valid = False
            flash("Password and confirm password must match", "register")
        return is_valid
    

