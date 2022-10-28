import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

export function initialize(){
    const firebaseApp = initializeApp()
    const firebaseAuth = getAuth(firebaseApp)
    const fireStore = getFirestore()

    return {firebaseApp, firebaseAuth, fireStore}
}
