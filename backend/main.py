import sys
import os
sys.path.append(os.path.abspath('../'))
from config import app, db
from models import fetch_all_target_data
from flask import request, jsonify, Blueprint

# There has to be a better way to do the models import
from models import Targets, FocusObjectives, KeyAreas, Table121b, Table132c, Table311a, Table311b, Table321a, Table411a, Table421a, Table431a, Table512b, Table521a, Table521b, Table611a, Table611b, Table621a, Table621b, Table622a

# From Claire in Slack:
# route for fetching all data (router.get('/'...)
# route for fetching data by dynamic focus objective (router.get('/:focusObjectiveId'...)
# route for fetching data by dynamic focus objective AND key area (router.get('/:focusObjectiveId/:keyAreaId'...)

# // Route for fetching all target data
# router.get('/', async (req, res) => {
#     try {
#         const result = await fetchAllTargetData();
#         console.log('Query result:', result);
#         res.json(result);
#     } catch (error) {
#         console.error('Error retrieving targets', error);
#         res.status(500).json({ message: 'Database query failed' });
#     }
# });



@app.route("/", methods=["GET"] )
def get_all_target_data():
    try:
        result = fetch_all_target_data()
        return jsonify(result)
    except Exception as error:
        print(f"Error retrieving targets: {error}")
        return jsonify({'message': 'Database query failed'}), 500




if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)