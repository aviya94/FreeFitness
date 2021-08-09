// Create firebase object only once

var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCI4DLZ5M1E2zOwmunSrJQgX4Ov7XhugJ4",
  authDomain: "authmaps-a0ad8.firebaseapp.com",
  projectId: "authmaps-a0ad8",
  storageBucket: "authmaps-a0ad8.appspot.com",
  messagingSenderId: "472175248967",
  appId: "1:472175248967:web:cec60d662c23caf2dfd362",
  measurementId: "G-35PND4008C",
};
if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
}


