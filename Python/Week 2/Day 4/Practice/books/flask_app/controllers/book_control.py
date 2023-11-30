from flask import Flask,flash,redirect,render_template,request,session
from flask_app import app
from flask_app.models.book_model import Book
from flask_app.models.author_model import Author




@app.route("/books")
def books():
    return render_template("books.html",books=Book.get_all_books())

@app.route("/create/book",methods=['post'])
def create_book():
    data={**request.form}
    result=Book.create(data)
    print (result)
    return redirect('/books')

@app.route("/books/<int:id>")
def book_page(id):
    data={'id':id}
    authors_book=Author.get_authors_favorite_by_book (data)
    print("authors_books",authors_book)
    authors_not_favorites=Author.get_not_favorite (data)
    print("authors_not_favorites",authors_not_favorites)

    return render_template("book_authors.html",authors_book=authors_book,authors_not_book=authors_not_favorites,book_id=id)
    
@app.route("/create/author_favorite",methods=['post'])
def create_author_favorite():
    data={**request.form}
    Author.add_favv(data)
    return redirect(f"/books/{request.form['book_id']}")
