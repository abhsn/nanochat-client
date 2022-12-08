import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const authValue = { user, signUp };

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider;