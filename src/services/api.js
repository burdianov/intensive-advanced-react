import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config";

class ApiService {
  constructor(firebaseConfig) {
    this.fb = firebase.initializeApp(firebaseConfig);
  }

  signUp = async (email, password) => {
    await this.fb.auth().createUserWithEmailAndPassword(email, password);
  };
}

export default new ApiService(firebaseConfig);
