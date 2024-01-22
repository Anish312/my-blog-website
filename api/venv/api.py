from flask import Flask, jsonify
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./my-blog-website-c8296-firebase-adminsdk-awj07-b540c91a84.json")

app = firebase_admin.initialize_app(cred)

store = firestore.client()
doc_ref = store.collection('tracked_data')
docs = doc_ref.get()

categories = []

for doc in docs:
    doc_data = doc.to_dict()
    viewed_blogs = doc_data.get('viewed_blogs', [])

    for blog in viewed_blogs:
        category = blog.get('category')
        if category:
            categories.append(category)



app = Flask(__name__) 


@app.route('/')
def predict():
    doc_ref = store.collection('tracked_data')
    docs = doc_ref.get()


    
     
    result = []
    for doc in docs:
        doc_data = doc.to_dict()
        result.append(doc_data)
        # print(u'Doc Data:{}'.format(doc_data)) 
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True) 
