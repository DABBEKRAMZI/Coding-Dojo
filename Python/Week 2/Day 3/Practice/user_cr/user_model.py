from mysqlconnection import connectToMySQL


class User :
    def __init__(self,data) :
        self.id=data['Id']
        self.first_name=data['First_name']
        self.last_name=data['Last_name']
        self.email=data['email']
        self.created_at=data['Created_at']
        self.updated_at=data['Updated_at']

    @classmethod
    def get_all(cls):
        query=''' SELECT *FROM users '''
        results=connectToMySQL("users").query_db(query)
        all_users=[]
        for user in results:
            all_users.append(cls(user))
        return all_users
    
    @classmethod
    def save(cls,data):
        query='''
                INSERT INTO users (First_name,Last_name,email)
                VALUES (%(first_name)s,%(last_name)s,%(email)s)'''
        results=connectToMySQL("users").query_db(query,data)