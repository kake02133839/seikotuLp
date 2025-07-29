import os
from flask import Flask, render_template

app = Flask(__name__)

# トップページ
@app.route("/")
def index():
    return render_template("index.html")

# 施設写真ページ（必要に応じて）
@app.route("/photos")
def photos():
    return render_template("photos.html")

# Render 用の起動コード
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
