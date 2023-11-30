from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE


class Author:
    def __init__(self,data_dict) :
        self.id=data_dict['id']
        self.name=data_dict['name']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']


    @classmethod
    def get_all_authors(cls):
        query=''' SELECT *FROM authors'''
        results=connectToMySQL(DATABASE).query_db(query)
        all_authors=[]
        for result in results :
            all_authors.append(cls(result))
        
        return all_authors
    @classmethod
    def get_author_by_id(cls,data):
        query=''' SELECT *FROM authors WHERE id=%(id)s'''
        results=connectToMySQL(DATABASE).query_db(query,data)
        return cls(results[0])
        
    @classmethod
    def create(cls,data):
        query= ''' INSERT INTO authors (name) VALUES (%(name)s)'''
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_authors_favorite_by_book (cls,data):
        query ='''select authors.id,authors.name from authors join favorites on authors.id=favorites.author_id 
                join books on favorites.book_id=books.id where books.id=%(id)s'''
        return connectToMySQL(DATABASE).query_db(query,data)
    
    
    @classmethod
    def add_favv(cls,data):
        print("😊"*5, data,"😊"*5)
        query= ''' INSERT INTO favorites (book_id,author_id) VALUES (%(book_id)s,%(author_id)s)'''
        return connectToMySQL(DATABASE).query_db(query,data)
      
    @classmethod
    def get_not_favorite (cls,data):
        query = """ select * from authors where id not in 
                                (select author_id from favorites where book_id = %(id)s)
                            ;"""
        db_result = connectToMySQL(DATABASE).query_db(query, data)
        not_favs = []
        if db_result:
            for row in db_result:
                not_favs.append(cls(row))
        return not_favs