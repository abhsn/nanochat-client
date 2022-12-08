import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Contacts from "../Contacts/Contacts";
import Message from "../Message/Message";

function Home() {
	const { user } = useContext(AuthContext);
	console.log(user);

	return (
		<div className="grid grid-cols-12">
			<Contacts />
			<Message />
		</div>
	)
}

export default Home;