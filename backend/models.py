from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Date, Integer, String, Text
from config import db
from config import app

# Create the database engine using the imported URI
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])

def fetch_all_target_data():
    query = text("""
    SELECT
        focus_objectives.id AS focus_objective_id,
        focus_objectives.name AS focus_objective_name,
        key_areas.id AS key_area_id,
        key_areas.name AS key_area_name,
        targets.target_id,
        targets.indicator,
        targets.target_description,
        targets.result_to_date,
        targets.program_target,
        targets.expected_result
    FROM focus_objectives
    JOIN key_areas ON focus_objectives.id = key_areas.focus_objectives_id
    JOIN targets ON key_areas.id = targets.key_area_id
    """)
    result = db.session.execute(query).fetchall()
    colnames = ['focus_objective_id', 'focus_objective_name', 'key_area_id', 'key_area_name', 'target_id', 'indicator', 'target_description', 'result_to_date', 'program_target', 'expected_result']
    return [dict(zip(colnames, row)) for row in result]


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


class KeyAreas(db.Model):
    __tablename__ = 'key_areas'
    id = db.Column(db.Integer, primary_key=True)
    focus_objectives_id = db.Column(db.Integer, db.ForeignKey('focus_objectives.id'), nullable=True)
    name = db.Column(db.String(255), nullable=False)
    management = db.Column(db.String(255), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "focusObjectivesId": self.focus_objectives_id,
            "name": self.name,
            "management": self.management,
        }


class Table121b(db.Model):
    __tablename__ = '1.2.1.b'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    date = db.Column(db.Date, nullable=True)
    location = db.Column(db.String(255), nullable=True)
    countries = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "date": self.date,
            "location": self.location,
            "countries": self.countries,
            "description": self.description,
        }


class Table132c(db.Model):
    __tablename__ = '1.3.2.c'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    course_id = db.Column(db.BigInteger, nullable=True)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.Date, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    user_fullname_or_id = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseId": self.course_id,
            "shortname": self.shortname,
            "fullname": self.fullname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
            "userFullnameOrId": self.user_fullname_or_id,
            "userCountry": self.user_country,
        }


class Table311a(db.Model):
    __tablename__ = '3.1.1.a'
    id = db.Column(db.Integer, primary_key=True,nullable=True)
    country = db.Column(db.Text, nullable=True)
    total_training_credits_available = db.Column(db.BigInteger, nullable=True)
    total_training_credits_allocated = db.Column(db.Text, nullable=True)
    percentage_allocated = db.Column(db.BigInteger, nullable=True)
    sum_used = db.Column(db.Text, nullable=True)
    percentage_used = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "country": self.country,
            "totalTrainingCreditsAvailable": self.total_training_credits_available,
            "totalTrainingCreditsAllocated": self.total_training_credits_allocated,
            "percentageAllocated": self.percentage_allocated,
            "sumUsed": self.sum_used,
            "percentageUsed": self.percentage_used,
        }



class Table311b(db.Model):
    __tablename__ = '3.1.1.b'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    edition = db.Column(db.Double, nullable=True)
    key_term_match = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "shortname": self.shortname,
            "fullname": self.fullname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
            "edition": self.edition,
            "keyTermMatch": self.key_term_match,
        }


class Table321a(db.Model):
    __tablename__ = '3.2.1.a'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    user_id = db.Column(db.BigInteger,nullable=True)
    last_login = db.Column(db.DateTime, nullable=True)
    country_id = db.Column(db.BigInteger, nullable=True)
    # Does country name really need to be Text? Not String?
    country_name = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "lastLogin": self.last_login,
            "countryId": self.country_id,
            "countryName": self.country_name,
        }


class Table411a(db.Model):
    __tablename__ = '4.1.1.a'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    # start date should not be type text??
    start_date = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "shortname": self.shortname,
            "fullname": self.fullname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
            "level": self.level,
        }

## These data types cannot be accurate
class Table421a(db.Model):
    __tablename__ = '4.2.1.a'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    course_id = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    course_fullname = db.Column(db.Text, nullable=True)
    course_start_date = db.Column(db.Text, nullable=True)
    course_main_topic = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Text, nullable=True)
    user_email = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)
    member_nation = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseId": self.course_id,
            "courseShortname": self.course_shortname,
            "courseFullname": self.course_fullname,
            "courseStartDate": self.course_start_date,
            "courseMainTopic": self.course_main_topic,
            "userId": self.user_id,
            "userEmail": self.user_email,
            "userCountry": self.user_country,
            "memberNation": self.member_nation,
        }

class Table431a(db.Model):
    __tablename__ = '4.3.1.a'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    course_id = db.Column(db.BigInteger, nullable=True)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.Date, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    user_fullname_or_id = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseId": self.course_id,
            "shortname": self.shortname,
            "fullname": self.fullname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
            "userFullnameOrId": self.user_fullname_or_id,
            "userCountry": self.user_country,
        }

class Table512b(db.Model):
    __tablename__ = '5.1.2.b'
    id = db.Column(db.Integer, primary_key=True,nullable=False)
    unique_user_id = db.Column(db.BigInteger, nullable=True)
    user_country = db.Column(db.Text, nullable=True)
    completion_date = db.Column(db.Text, nullable=True)
    eufmd_na = db.Column(db.Double, nullable=True) 
    eufmd_me = db.Column(db.Double, nullable=True)
    eufmd_seen = db.Column(db.Double, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "uniqueUserId": self.unique_user_id,
            "userCountry": self.user_country,
            "completionDate": self.completion_date,
            "eufmdNa": self.eufmd_na,
            "eufmdMe": self.eufmd_me,
            "eufmdSeen": self.eufmd_seen,
        }

class Table521a(db.Model):
    __tablename__ = '5.2.1.a'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    country = db.Column(db.Text, nullable=True)
    year = db.Column(db.BigInteger, nullable=True)
    PCP_stage = db.Column(db.Text, nullable=True)
    PCP_stage_int = db.Column(db.Integer, nullable=True)
    year_diff = db.Column(db.Integer, nullable=True)
    stage_diff = db.Column(db.Integer, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "country": self.country,
            "year": self.year,
            "pcpStage": self.PCP_stage,
            "pcpStageInt": self.PCP_stage_int,
            "yearDiff": self.year_diff,
            "stageDif": self.stage_diff,
            "id": self.id,
        }

class Table521b(db.Model):
    __tablename__ = '5.2.1.b'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)
    eufmd_na = db.Column(db.Double, nullable=True) 
    eufmd_me = db.Column(db.Double, nullable=True)
    eufmd_seen = db.Column(db.Double, nullable=True)
    in_region = db.Column(db.Integer, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseFullname": self.course_fullname,
            "courseShortname": self.course_shortname,
            "mainTopic": self.main_topic,
            "startDate": self.start_date,
            "country": self.country,
            "eufmdNa": self.eufmd_na,
            "eufmdMe": self.eufmd_me,
            "eufmdSeen": self.eufmd_seen,
            "inRegion": self.in_region,
        }

class Table611a(db.Model):
    __tablename__ = '6.1.1.a'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    course_shortname = db.Column(db.Text, nullable=True)
    course_fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    # edition typing is inconsistent; double or bigint?
    edition = db.Column(db.BigInteger, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseShortname": self.course_shortname,
            "courseFullname": self.course_fullname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
            "edition":self.edition,
        }

class Table611b(db.Model):
    __tablename__ = '6.1.1.b'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    unique_user_id = db.Column(db.BigInteger, nullable=True)
    course_completion_date = db.Column(db.Date, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "uniqueUserId": self.unique_user_id,
            "courseCompletionDate": self.course_completion_date,
        }

class Table621a(db.Model):
    __tablename__ = '6.2.1.a'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseFullname": self.course_fullname,
            "courseShortname": self.course_shortname,
            "mainTopic": self.main_topic,
            "level": self.level,
            "startDate": self.start_date,
            "country": self.country,
        }


class Table621b(db.Model):
    __tablename__ = '6.2.1.b'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)

    ## The previous two are exactly the same?
    def to_json(self):
        return {
            "id": self.id,
            "courseFullname": self.course_fullname,
            "courseShortname": self.course_shortname,
            "mainTopic": self.main_topic,
            "level": self.level,
            "startDate": self.start_date,
            "country": self.country,
        }

class Table622a(db.Model):
    __tablename__ = '6.2.2.a'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "courseFullname": self.course_fullname,
            "courseShortname": self.course_shortname,
            "startDate": self.start_date,
            "mainTopic": self.main_topic,
        }
