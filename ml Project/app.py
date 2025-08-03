from flask import Flask, render_template, request # type: ignore
import pickle
import re

app = Flask(__name__)

vector = pickle.load(open("vertorizer.pkl", "rb"))
model = pickle.load(open("phishing.pkl", "rb"))


@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        url = request.form["url"]
        #print(url)
        clean_url = re.sub(r'^https?://(www\.)?', '', url)
        prediction = model.predict(vector.transform([clean_url]))
        #print(prediction)

        if prediction == 'bad':
            prediction = "This is a phishing website"
        elif prediction == 'good':
            prediction = "This is a safe website"
        else :
            prediction = "Something went wrong"

        return render_template("index.html", prediction=prediction)
    else:
        return render_template("index.html")
        


if __name__ == "__main__":
    app.run(debug=True)