import sys
import os
sys.path.append(os.path.abspath('../'))
from config import app, db
from models import FocusObjectives, KeyAreas, Targets
from flask import jsonify
from sqlalchemy import create_engine, select
from sqlalchemy.orm import aliased

# Create the database engine using the imported URI
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])

KeyAreasAlias = aliased(KeyAreas)
TargetsAlias = aliased(Targets)


base_query = select(
    FocusObjectives.id.label("focus_objective_id"),
    FocusObjectives.name.label("focus_objective_name"),
    KeyAreasAlias.id.label("key_area_id"),
    KeyAreasAlias.name.label("key_area_name"),
    TargetsAlias.target_id.label("target_id"),
    TargetsAlias.indicator.label("indicator"),
    TargetsAlias.target_description.label("target_description"),
    TargetsAlias.result_to_date.label("result_to_date"),
    TargetsAlias.program_target.label("program_target"),
    TargetsAlias.expected_result.label("expected_result"),
    TargetsAlias.target_timeframe.label("target_timeframe"),
).select_from(FocusObjectives).join(
    KeyAreasAlias,
    KeyAreasAlias.focus_objectives_id == FocusObjectives.id
).join(
    TargetsAlias,
    TargetsAlias.key_area_id == KeyAreasAlias.id
)

colnames = [
    "focus_objective_id", "focus_objective_name", "key_area_id", "key_area_name",
    "target_id", "indicator", "target_description", "result_to_date",
    "program_target", "expected_result", "target_timeframe"
]



# route for fetching all data
@app.route("/", methods=["GET"] )
def get_all_data():
    try:
        result = db.session.execute(base_query).fetchall()
        return jsonify([dict(zip(colnames, row)) for row in result])
    except Exception as error:
        print(f"Error retrieving targets: {error}")
        return jsonify({'message': 'Database query failed'}), 500


# route for fetching data by focus objective id
@app.route('/<int:focus_objective_id>', methods=["GET"])
def get_data_by_focus_objective(focus_objective_id):

    try:
        query = base_query.where(FocusObjectives.id == focus_objective_id)
        result = db.session.execute(query).fetchall()

        if not result: 
            return jsonify({'message': 'Focus Objective not found'}), 404
        data = [dict(zip(colnames, row)) for row in result]
        return jsonify(data)
    except Exception as error:
        print(f"Error retrieving focus objectives: {error}")
        return jsonify({'message': 'Database query failed'}), 500


# route for fetching data by focus objective AND key area
@app.route('/<int:focus_objective_id>/<int:key_area_id>', methods=["GET"])
def get_data_by_key_area(focus_objective_id, key_area_id):

    try:
        query = base_query.where(FocusObjectives.id == focus_objective_id)
        query = query.where(KeyAreasAlias.id == key_area_id)
        result = db.session.execute(query).fetchall()

        if not result: 
            return jsonify({'message': 'Focus Objective not found'}), 404
        data = [dict(zip(colnames, row)) for row in result]
        return jsonify(data)
    except Exception as error:
        print(f"Error retrieving focus objectives: {error}")
        return jsonify({'message': 'Database query failed'}), 500


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)