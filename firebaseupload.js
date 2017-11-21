var admin = require("firebase-admin");
var serviceAccount = require("serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://digitaladvertisemntsviewdata.firebaseio.com"
});

var db = admin.firestore();
var ref = db.collection('campaign').doc('test1');
var getDoc = ref.get()
    .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
        }
    })
    .catch(err => {
        console.log('Error getting document', err);
    });