import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {firebaseAuth} from "./firebase";
import {AuthResponse} from "../types/auth";



export function createUser(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email, password) as unknown as Promise<AuthResponse>
}

export function loginUser(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email, password) as unknown as Promise<AuthResponse>
}

