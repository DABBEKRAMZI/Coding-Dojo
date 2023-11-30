from flask import Flask,flash,redirect,render_template,request,session
from flask_app import app
from flask_app.models.author_model import Author
from flask_app.models.book_model import Book


@app.route("/")
def home():
    return redirect('/authors')

@app.route("/authors")
def authors():
    return render_template("authors.html",authors=Author.get_all_authors())

@app.route("/create/author",methods=['post'])
def create_author():
    data={**request.form}
    result=Author.create(data)
    print (result)
    return redirect('/authors')

@app.route("/authors/<int:id>")
def author_page(id):
    data={'id':id}
    books_author=Book.get_books_favorite_by_author (data)
    print(books_author)
    
    not_author = Book.get_not_favorite(data)
    return render_template("author_books.html",author=Author.get_author_by_id(data),books_author=books_author,author_id=id, not_author=not_author)

@app.route("/create/book_favorite",methods=['post'])
def create_book_favorite():
    data={**request.form}
    Author.add_favv(data)
    return redirect(f"/authors/{request.form['author_id']}")