import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Contacts from "../Contacts/Contacts";
import Message from "../Message/Message";

function Home() {
	const { user, loading } = useContext(AuthContext);
	// console.log(user);

	if (loading) {
		return (
			<span>Loading...</span>
		)
	} else {
		if (!user) {
			return (
				<Navigate to="/register"></Navigate>
			)
		} else {
			return (
				<div className="grid grid-cols-12">
					<Contacts />
					<Message />
				</div>
			)
		}
	}

}

export default Home;