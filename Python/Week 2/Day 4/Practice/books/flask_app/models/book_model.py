from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE


class Book:
    def __init__(self,data_dict) :
        self.id=data_dict['id']
        self.title=data_dict['title']
        self.num_of_pages=data_dict['num_of_pages']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']


    @classmethod
    def get_all_books(cls):
        query=''' SELECT *FROM books'''
        results=connectToMySQL(DATABASE).query_db(query)
        all_books=[]
        for result in results :
            all_books.append(cls(result))
        
        return all_books
    @classmethod
    def create(cls,data):
        query= ''' INSERT INTO books (title,num_of_pages) VALUES (%(title)s,%(num_of_pages)s)'''
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_books_favorite_by_author (cls,data):
        query ='''select books.id,books.title,books.num_of_pages from authors join favorites on authors.id=favorites.author_id 
                join books on favorites.book_id=books.id where authors.id=%(id)s'''
        return connectToMySQL(DATABASE).query_db(query,data)
    
   
    @classmethod
    def get_not_favorite (cls,data):
        query = """ select * from books where id not in 
                                (select book_id from favorites where author_id = %(id)s)
                            ;"""
        db_result = connectToMySQL(DATABASE).query_db(query, data)
        not_favs = []
        if db_result:
            for row in db_result:
                not_favs.append(cls(row))
        return not_favs