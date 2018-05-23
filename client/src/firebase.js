
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCRt7R-mMY2jyswIZosiKLMYQV99ISbbrY",
  authDomain: "todo-d00ed.firebaseapp.com",
  databaseURL: "https://todo-d00ed.firebaseio.com",
  projectId: "todo-d00ed",
  storageBucket: "todo-d00ed.appspot.com",
  messagingSenderId: "924209355429"
};

export const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()

// export const db = app.database()
export const todoRef = db.ref('todo')