import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDwGJnxabiJ20pJVM4nL6rOGJSF4tudhug',
	authDomain: 'netflix-react-clone-v1.firebaseapp.com',
	projectId: 'netflix-react-clone-v1',
	storageBucket: 'netflix-react-clone-v1.appspot.com',
	messagingSenderId: '979142674125',
	appId: '1:979142674125:web:f62c25b38391a9bd6e4b84',
	measurementId: 'G-7LXKEXMDSS',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
