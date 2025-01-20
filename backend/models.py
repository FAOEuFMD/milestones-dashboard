from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Date, Integer, String, Text
from config import db
from config import SQLALCHEMY_DATABASE_URI

# Create the database engine using the imported URI
engine = create_engine(SQLALCHEMY_DATABASE_URI)


class Targets(db.Model):
    __tablename__ = 'targets'
    # This ID is not the primary key??
    id = db.Column(db.Integer, nullable=True)
    key_area_id = db.Column(db.Integer, nullable=True)
    expected_result_id = db.Column(db.String(50), nullable=True)
    expected_result = db.Column(db.String(128), nullable=True)
    target_id = db.Column(db.String(50), nullable=True)
    indicator = db.Column(db.String(256), nullable=True)
    target_description = db.Column(db.string(1024), nullable=True)
    result_to_date = db.Column(db.Integer, nullable=True)
    program_target = db.Column(db.Integer, nullable=True)
    target_timeframe = db.Column(db.String(50), nullable=True)
    timeframe_frequency = db.Column(db.String(50), nullable=True)

class FocusObjectives(db.Model):
    __tablename__ = 'focus_objectives'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)
    management = db.Column(db.String(255), nullable=True)


class KeyAreas(db.Model):
    __tablename__ = 'key_areas'
    id = db.Column(db.Integer, primary_key=True)
    focus_objectives_id = db.Column(db.Integer, nullable=True)
    name = db.Column(db.String(255), nullable=False)
    management = db.Column(db.String(255), nullable=False)


class Table121b(db.Model):
    __tablename__ = '1.2.1.b'
    # There's no id???
    date = db.Column(db.Date, nullable=True)
    location = db.Column(db.String(255), nullable=True)
    countries = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=True)



class Table132c(db.Model):
    __tablename__ = '1.3.2.c'
    # Still no id??
    course_id = db.Column(db.BigInt, nullable=True)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.Date, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    user_fullname_or_id = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)



class Table311a(db.Model):
    __tablename__ = '3.1.1.a'
    # still no id
    country = db.Column(db.Text, nullable=True)
    total_training_credits_available = db.Column(db.BigInt, nullable=True)
    total_training_credits_allocated = db.Column(db.Text, nullable=True)
    percentage_allocated = db.Column(db.BigInt, nullable=True)
    sum_used = db.Column(db.Text, nullable=True)
    percentage_used = db.Column(db.Text, nullable=True)


class Table311b(db.Model):
    __tablename__ = '3.1.1.b'
    # no id
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    edition = db.Column(db.Double, nullable=True)
    key_term_match = db.Column(db.Text, nullable=True)

class Table321a(db.Model):
    __tablename__ = '3.2.1.a'
    user_id = db.Column(db.BigInt,nullable=True)
    last_login = db.Column(db.DateTime, nullable=True)
    country_id = db.Column(db.BigInt, nullable=True)
    # Does country name really need to be Text? Not String?
    country_name = db.Column(db.Text, nullable=True)


class Table411a(db.Model):
    __tablename__ = '4.1.1.a'
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    # start date should not be type text??
    start_date = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)


## These data types cannot be accurate
class Table421a(db.Model):
    __tablename__ = '4.2.1.a'
    course_id = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    course_fullname = db.Column(db.Text, nullable=True)
    course_start_date = db.Column(db.Text, nullable=True)
    course_main_topic = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Text, nullable=True)
    user_email = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)
    member_nation = db.Column(db.Text, nullable=True)


class Table431a(db.Model):
    __tablename__ = '4.3.1.a'
    course_id = db.Column(db.BigInt, nullable=True)
    shortname = db.Column(db.Text, nullable=True)
    fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.Date, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    user_fullname_or_id = db.Column(db.Text, nullable=True)
    user_country = db.Column(db.Text, nullable=True)


class Table512b(db.Model):
    __tablename__ = '5.1.2.b'
    unique_user_id = db.Column(db.BigInt, nullable=True)
    user_country = db.Column(db.Text, nullable=True)
    completion_date = db.Column(db.Text, nullable=True)
    eufmd_na = db.Column(db.Double, nullable=True) 
    eufmd_me = db.Column(db.Double, nullable=True)
    eufmd_seen = db.Column(db.Double, nullable=True)

class Table521a(db.Model):
    __tablename__ = '5.2.1.a'
    id = db.Column(db.BigInt, nullable=True)
    country = db.Column(db.Text, nullable=True)
    year = db.Column(db.BigInt, nullable=True)
    PCP_stage = db.Column(db.Text, nullable=True)
    PCP_stage_int = db.Column(db.Integer, nullable=True)
    year_diff = db.Column(db.Integer, nullable=True)
    stage_diff = db.Column(db.Integer, nullable=True)


class Table521b(db.Model):
    __tablename__ = '5.2.1.b'
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)
    eufmd_na = db.Column(db.Double, nullable=True) 
    eufmd_me = db.Column(db.Double, nullable=True)
    eufmd_seen = db.Column(db.Double, nullable=True)
    in_region = db.Column(db.TinyInt, nullable=True)

class Table611a(db.Model):
    __tablename__ = '6.1.1.a'
    course_shortname = db.Column(db.Text, nullable=True)
    course_fullname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    # edition typing is inconsistent; double or bigint?
    edition = db.Column(db.BigInt, nullable=True)


class Table611b(db.Model):
    __tablename__ = '6.1.1.b'
    unique_user_id = db.Column(db.BigInt, nullable=True)
    course_completion_date = db.Column(db.Date, nullable=True)


class Table621a(db.Model):
    __tablename__ = '6.2.1.a'
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)

class Table621b(db.Model):
    __tablename__ = '6.2.1.b'
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)
    level = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    country = db.Column(db.Text, nullable=True)

    ## The previous two are exactly the same?


class Table622a(db.Model):
    __tablename__ = '6.2.2.a'
    course_fullname = db.Column(db.Text, nullable=True)
    course_shortname = db.Column(db.Text, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    main_topic = db.Column(db.Text, nullable=True)





# EXAMPLE:
# class FocusObjectives(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=False, nullable=True)
#     management = db.Column(db.String(255), unique=False, nullable=True)

#     def to_json(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "management": self.management,
#         }

