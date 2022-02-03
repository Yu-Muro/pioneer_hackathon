import flask
from flask import Flask, request, jsonify, abort
import db_manager
import os
import img


SECRET_KEY = "hogefuga"

app = flask.Flask(
    __name__,
    template_folder="templates" # HTMLファイルの置き場所を設定
)
app.config["SECRET_KEY"] = SECRET_KEY


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                        'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                        'GET,PUT,POST,DELETE,OPTIONS')
    return response



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

@app.route("\rev", methods=["POST"])
def rev():
    username = flask.request.form.get('username')
    mileage = flask.request.form.get('mileage')
    db_manager.update_user(username, mileage)
    r = db_manager.get_pic(username)
    pic_id, mileage = r[0][0], r[0][1]
    img_data = str(img.make_img(pic_id, mileage))
    return jsonify({
        "message": "Account successfully login",
        "img": img_data}), 200

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
