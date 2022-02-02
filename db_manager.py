import os

from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()


class User(Base):
    __tablename__ = "user_data"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(20))
    password = Column(String(20))
    picture_id = Column(Integer)
    mileage = Column(Integer)


#PostgreSQLとの接続用
db_uri = os.environ['DATABASE_URL']
if db_uri.startswith("postgres://"):
    db_uri = db_uri.replace("postgres://", "postgresql://", 1)
engine = create_engine(db_uri)
session_factory = sessionmaker(bind=engine)
session = session_factory()

Base.metadata.create_all(bind=engine)

def add_new_user(user_id, password, picture_id = 1, mileage = 0):
    session.rollback()
    new_user = User(
        user_id = user_id,
        password = password,
        picture_id = picture_id,
        mileage = mileage
    )
    session.add(new_user)
    session.commit()
    session.close()
    return None


def is_exist(user_id, password):
    result = session.query(User.user_id).filter(User.user_id == user_id, User.password == password).all()
    session.close()
    if result == []:
        return False
    else:
        return True

def get_user(user_id):
    result = session.query(User.user_id).filter(User.user_id == user_id).all()
    session.close()
    return result

def update_user(user_id, mileage):
    user = session.query(User).filter(User.user_id == user_id).first()
    user.mileage = mileage
    session.commit()
    session.close()

def delete_user(user_id):
    user = session.query(User).filter(User.user_id == user_id).first()
    session.delete(user)
    session.commit()
    session.close()

if __name__ == "__main__":
    print("session closed")
