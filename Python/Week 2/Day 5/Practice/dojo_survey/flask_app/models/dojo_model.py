from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Dojo:
    def __init__(self,data_dict) :
        self.id=data_dict['id']
        self.name=data_dict['name']
        self.location=data_dict['location']
        self.language=data_dict['language']
        self.comment=data_dict['comment']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']

    @classmethod
    def create(cls,data):
        query='''INSERT INTO dojos (name,location,language,comment)
                VALUES (%(name)s,%(location)s,%(language)s,%(comment)s)'''
        
        return connectToMySQL(DATABASE).query_db(query,data)
    @classmethod
    def get_by_id(cls,data):
        query= '''SELECT * FROM dojos WHERE id=%(id)s'''
        results = connectToMySQL(DATABASE).query_db(query,data)
        return cls(results[0])
    
    @staticmethod
    def validdte_dojo(Dojo):
        is_valid=True
        if len(Dojo['name'])<3:
            flash('name too short')
            is_valid=False
        if len(Dojo['comment'])<10 :
            flash('comment is  too short')
            is_valid=False
        return is_valid
        


