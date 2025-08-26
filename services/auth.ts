import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {firebaseAuth} from "./firebase";



export function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
}

export function loginUser(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}

