import { initializeApp, getApps, cert, type App } from "firebase-admin/app"
import { getFirestore, type Firestore } from "firebase-admin/firestore"

let app: App
let db: Firestore

function getFirebaseAdmin() {
  if (getApps().length > 0) {
    app = getApps()[0]
    db = getFirestore(app)
    return { app, db }
  }

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON

  if (!serviceAccountJson) {
    console.warn(
      "[Firebase Admin] FIREBASE_SERVICE_ACCOUNT_JSON is not set. " +
      "Firestore writes will fail. Add it to your .env.local file."
    )
    // Initialize without credentials for build-time — will fail at runtime
    app = initializeApp({ projectId: "sagent-placeholder" })
    db = getFirestore(app)
    return { app, db }
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountJson)
    app = initializeApp({
      credential: cert(serviceAccount),
    })
    db = getFirestore(app)
    return { app, db }
  } catch (error) {
    console.error("[Firebase Admin] Failed to parse service account JSON:", error)
    throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT_JSON")
  }
}

const firebaseAdmin = getFirebaseAdmin()
export { firebaseAdmin }
export { db }
