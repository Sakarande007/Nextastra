# Nextastra
Assignment 
</br>
Author - Sanket Karande
# Phishing Website Detection System

This project is an AI-based system designed to detect phishing websites in real-time. It analyzes URLs to classify them as either "phishing" or "legitimate," helping to protect users from online scams and data theft.

## Problem Statement

Phishing is a major cybersecurity threat where attackers create malicious websites that mimic legitimate ones to steal sensitive user information like login credentials and financial details. Traditional methods of detection, such as blacklisting, are often too slow to keep up with the rapid creation of new phishing sites. This project aims to provide an automated and intelligent solution to this problem.

## Project Objectives

* Develop a machine learning model to accurately classify websites.
* Extract and utilize features from URLs and website content for classification.
* Provide a simple web interface for users to check URLs in real-time.
* Explain why a particular website is flagged as suspicious.
* Ensure the model has low false-positive rates and can be updated with new data.

## Screenshots

Here's a look at the web application interface:

**Legitimate Website Example:**
![phishing](https://github.com/user-attachments/assets/343a6191-1cc6-4322-a38b-391cc71742de)

**Phishing Website Example:**

![phishing1](https://github.com/user-attachments/assets/d8b239ba-5401-4967-9530-7d7ccbd84fa3)

## Features

* **Real-time Detection:** Instantly analyze and classify URLs.
* **Machine Learning Model:** Utilizes a trained model to predict if a website is malicious.
* **Feature Extraction:** Analyzes various URL components, such as domain information, HTTPS usage, and special characters.
* **User-Friendly Interface:** A simple and intuitive web page for easy use.
* **Threat Explanations:** Provides context on why a site is considered a potential threat.

## Technologies Used

* **Backend:** Python, Flask
* **Machine Learning:** Scikit-learn, Pandas, NumPy
* **Frontend:** HTML, CSS

## Setup and Installation

To get the project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/phishing-detection-system.git](https://github.com/your-username/phishing-detection-system.git)
    cd phishing-detection-system
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the application:**
    ```bash
    python app.py
    ```

5.  Open your web browser and navigate to `http://127.0.0.1:5000`.

## Usage

1.  Open the web application in your browser.
2.  Enter the full URL of the website you want to check into the input field.
3.  Click the "Submit" button.
4.  The application will display whether the site is predicted to be "safe" or a "phishing website."

## Sample Input/Output

* **Input (Legitimate):** `https://flask.palletsprojects.com/en/stable/quickstart/#a-minimal-application`
* **Output:** "This is a safe website"

* **Input (Phishing):** `http://it.xyz`
* **Output:** "This is a phishing website"

