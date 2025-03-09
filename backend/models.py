from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text, select
from sqlalchemy.orm import relationship
from config import db
from config import app

# Create the database engine using the imported URI
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])

class Targets(db.Model):
    __tablename__ = 'targets'
    id = db.Column(db.Integer, primary_key=True)
    key_area_id = db.Column(db.Integer, db.ForeignKey('key_areas.id'), nullable=True)
    expected_result_id = db.Column(db.String(50), nullable=True)
    expected_result = db.Column(db.String(128), nullable=True)
    target_id = db.Column(db.String(50), nullable=True)
    indicator = db.Column(db.String(256), nullable=True)
    target_description = db.Column(db.String(1024), nullable=True)
    result_to_date = db.Column(db.Integer, nullable=True)
    program_target = db.Column(db.Integer, nullable=True)
    target_timeframe = db.Column(db.String(50), nullable=True)
    timeframe_frequency = db.Column(db.String(50), nullable=True)
    key_area = relationship("KeyAreas", foreign_keys=[key_area_id]) # Add relationship to KeyAreas

    def to_json(self):
        return {
            "id": self.id,
            "keyAreaId": self.key_area_id,
            "expectedResultId": self.expected_result_id,
            "expectedResult": self.expected_result,
            "targetId": self.target_id,
            "indicator": self.indicator,
            "targetDescription": self.target_description,
            "resultToDate": self.result_to_date,
            "programTarget": self.program_target,
            "targetTimeframe": self.target_timeframe,
            "timeframeFrequency": self.timeframe_frequency,
        }


class KeyAreas(db.Model):
    __tablename__ = 'key_areas'
    id = db.Column(db.Integer, primary_key=True)
    focus_objectives_id = db.Column(db.Integer, db.ForeignKey('focus_objectives.id'), nullable=True)
    name = db.Column(db.String(255), nullable=False)
    management = db.Column(db.String(255), nullable=False)
    focus_objective = relationship("FocusObjectives", foreign_keys=[focus_objectives_id] ) 

    def to_json(self):
        return {
            "id": self.id,
            "focusObjectivesId": self.focus_objectives_id,
            "name": self.name,
            "management": self.management,
        }



class FocusObjectives(db.Model):
    __tablename__ = 'focus_objectives'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    management = db.Column(db.String(255), nullable=True)


    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "management": self.management
        }


