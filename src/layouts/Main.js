import React from "react";
import Contacts from "../pages/Contacts/Contacts";
import Message from "../pages/Message/Message";

function Main() {
	return (
		<div className="grid grid-cols-12">
			<Contacts />
			<Message />
		</div>
	)
}

export default Main;