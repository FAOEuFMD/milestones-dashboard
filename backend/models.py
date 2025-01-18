from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from config import db
from config import SQLALCHEMY_DATABASE_URI

# Create the database engine using the imported URI
engine = create_engine(SQLALCHEMY_DATABASE_URI)

# This is a database model represented as a python class
# Now we can define the fields this object will have
class Targets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key_areas_id = db.Column(db.Integer, unique=False, nullable=True)
    expected_results = db.Column(db.String(255), unique=False, nullable=True)
    indicator = db.Column(db.String(512), unique=False, nullable=True)
    annual_target = db.Column(db.String(1024), unique=False, nullable=True)
    Q1 = db.Column(db.Integer, unique=False, nullable=True)
    Q2 = db.Column(db.String(50), unique=False, nullable=True)
    Q3 = db.Column(db.String(50), unique=False, nullable=True)
    Q4 = db.Column(db.String(50), unique=False, nullable=True)
    target_date = db.Column(db.Integer, unique=False, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "keyAreasId": self.key_areas_id,
            "expectedResults": self.expected_results,
            "indicator": self.indicator,
            "annualTarget": self.annual_target,
            "Q1": self.Q1,
            "Q2": self.Q2,
            "Q3": self.Q3,
            "Q4": self.Q4,
            "targetDate": self.target_date,
        }

class FocusObjectives(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=False, nullable=True)
    management = db.Column(db.String(255), unique=False, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "management": self.management,
        }


class KeyAreas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    focus_objectives_id = db.Column(db.Integer, unique=False, nullable=True)
    name = db.Column(db.String(255), unique=False, nullable=False)
    management = db.Column(db.String(255), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "focusObjectivesId": self.focus_objectives_id,
            "name": self.name,
            "management": self.management,
        }

class Milestones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(40), unique = False, nullable=False)
    complete = db.Column(db.Integer, unique = False, nullable = True)

    def to_json(self):
        return {
            "id": self.id,
            "text": self.text,
            "complete": self.complete
        }

