import flask
import csv



SECRET_KEY = "hogefuga"

app = flask.Flask(
    __name__,
    template_folder="templates" # HTMLファイルの置き場所を設定
)
app.config["SECRET_KEY"] = SECRET_KEY

@app.route("/", methods = ["POST", "GET"])
def index():
    return flask.render_template("index.html")

@app.route("/register", methods = ["POST", "GET"])
def regisiter():
    if (flask.request.method == "POST"):
        
        username = flask.request.form.get('username')
        password = flask.request.form.get('password')
        confirmation = flask.request.form.get('confirmation')
        
        if not username:
            return flask.redirect('/register')
        elif not password:
            return flask.redirect('/register')
        elif not confirmation:
            return flask.redirect('/register')
        
        if password != confirmation:
            return flask.redirect('/register')
        else:
            ##csv入力 まだ書いてない
            System_list = [username, password]
            with open('test.csv', 'a') as file:
                writer = csv.writer(file, lineterminator='n')
                writer.writerow(System_list)
            return flask.redirect('/login')
    else:
        return flask.render_template("register.html")

@app.route("/login", methods = ["POST", "GET"])
def login():
    flask.session.clear()

    if flask.request.method == "POST":

        username = flask.request.form.get('username')
        password = flask.request.form.get('password')

        # must provide username
        if not username:
            return flask.redirect('/login')

        # must provide password
        elif not password:
            return flask.redirect('/login')

        #  csvとあってるか まだ書いてない


    else:
        return flask.render_template("login.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=808080, debug=True)

    


