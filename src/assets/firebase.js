import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";   

const firebaseConfig = {
  apiKey: "AIzaSyCea6Jg1n7z48XGIQVX98cZnrCmWBdXYko",
  authDomain: "weatherforecast-20.firebaseapp.com",
  projectId: "weatherforecast-20",
  storageBucket: "weatherforecast-20.appspot.com",
  messagingSenderId: "1097721793194",
  appId: "1:1097721793194:web:c3fc111162028872031ed3",
  measurementId: "G-NZBW7GFJCB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { app, analytics, auth }; 
