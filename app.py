import flask

SECRET_KEY = "hoge"

app = flask.Flask(
    __name__,
    template_folder="templates" # HTMLファイルの置き場所を設定
)
app.config["SECRET_KEY"] = SECRET_KEY

@app.route("/", methods = ["POST", "GET"])
def index():
    return flask.render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=808080, debug=True)