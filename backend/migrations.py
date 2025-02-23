from config import app, db
from alembic import op

def upgrade():
    # Add this at the start of your upgrade() function
    op.execute('SET FOREIGN_KEY_CHECKS=0')
    # ... your existing migration code ...
    op.execute('SET FOREIGN_KEY_CHECKS=1')


if __name__ == '__main__':
    upgrade()
    app.run()
