"""empty message

Revision ID: f139cb1483f9
Revises: 
Create Date: 2025-02-21 17:18:34.522362

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'f139cb1483f9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Disable foreign key checks
    op.execute('SET FOREIGN_KEY_CHECKS=0')
    
    # Drop tables in correct order
    op.drop_table('key_areas')  # Drop the child table first
    op.drop_table('focus_objectives')  # Then drop the parent table
    
    # Re-enable foreign key checks
    op.execute('SET FOREIGN_KEY_CHECKS=1')


def downgrade():
    pass
    # ### end Alembic commands ###
