from flask import *
app = Flask(__name__)
@app.route("/")
def home():
    return render_template("src\Components\login\Login.js")
if __name__ == "__main__":
    log.run()