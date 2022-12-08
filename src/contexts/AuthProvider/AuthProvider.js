import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		return signOut(auth);
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false);
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
		})

		return () => unSubscribe;
	}, []);

	const authValue = { user, signUp, loading, logOut };

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider;