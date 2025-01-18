from config import db

class Target(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    