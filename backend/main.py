import sys
import os
sys.path.append(os.path.abspath('../'))
from config import app, db
from models import FocusObjectives, KeyAreas, Targets
from flask import jsonify
from sqlalchemy import create_engine, select
from sqlalchemy.orm import aliased
from flask import send_from_directory

# Create the database engine using the imported URI
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])

KeyAreasAlias = aliased(KeyAreas)
TargetsAlias = aliased(Targets)


base_query = select(
    FocusObjectives.id.label("focus_objective_id"),
    FocusObjectives.name.label("focus_objective_name"),
    KeyAreasAlias.id.label("key_area_id"),
    KeyAreasAlias.name.label("key_area_name"),
    TargetsAlias.id.label("target_id"),
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


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
   
    if path.startswith('api/'):
        pass
    elif path != "" and os.path.exists(os.path.join('../frontend/dist', path)):
        return send_from_directory('../frontend/dist', path)
    else:
        return send_from_directory('../frontend/dist', 'index.html')    


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)