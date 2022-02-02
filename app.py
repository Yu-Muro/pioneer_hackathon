import flask
from flask import jsonify
import db_manager


SECRET_KEY = "hogefuga"

app = flask.Flask(
    __name__,
    template_folder="templates" # HTMLファイルの置き場所を設定
)
app.config["SECRET_KEY"] = SECRET_KEY


@app.route("/", methods = ["POST", "GET"])
def index():
    return flask.render_template("index.html")


@app.route("/register", methods = ["POST"])
def regisiter():
    if (flask.request.method == "POST"):
        
        username = flask.request.form.get('username')
        password = flask.request.form.get('password')
        confirmation = flask.request.form.get('confirmation')
        
        if not username:
            # return flask.redirect('/register')
            return jsonify({
                "message": "Account creation failed",
                "cause": "required user name"
            }), 400
        elif not password:
            # return flask.redirect('/register')
            return jsonify({
                "message": "Account creation failed",
                "cause": "required password"
            }), 400
        elif not confirmation:
            # return flask.redirect('/register')
            return jsonify({
                "message": "Account creation failed",
                "cause": "required password"
            }), 400
        
        if password != confirmation:
            # return flask.redirect('/register')
            return jsonify({
                "message": "Account creation failed",
                "cause": "not matched password"
            }), 400
        else:
            # ##csv入力 まだ書いてない
            # System_list = [username, password]
            # with open('test.csv', 'a') as file:
            #     writer = csv.writer(file, lineterminator='n')
            #     writer.writerow(System_list)
            if db_manager.get_user(username) != []:
                return jsonify({
                    "message": "Account creation failed",
                    "cause": "already same user name is used"
                }), 400
            db_manager.add_new_user(username, password)
            return jsonify({
                "message": "Account successfully created"}), 200
    # else:
    #     return flask.render_template("register.html")

@app.route("/login", methods = ["POST", "GET"])
def login():
    flask.session.clear()

    if flask.request.method == "POST":

        username = flask.request.form.get('username')
        password = flask.request.form.get('password')

        # must provide username
        if not username:
            # return flask.redirect('/login')
            return jsonify({
                "message": "Account creation failed",
                "cause": "required user name"
            }), 400

        # must provide password
        elif not password:
            # return flask.redirect('/login')
            return jsonify({
                "message": "Account creation failed",
                "cause": "required password"
            }), 400

        if db_manager.is_exist(username, password):
            return jsonify({
                "message": "Account successfully login"}), 200
    # else:
    #     return flask.render_template("login.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=808080, debug=True)
