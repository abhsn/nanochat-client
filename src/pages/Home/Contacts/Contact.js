function Contact({ contact, currentUser }) {
	const contactEmail = contact.users.filter(user => user !== currentUser);
	return (
		<div className="bg-gray-200 hover:bg-gray-300 p-4 mb-2 mx-2 rounded-md cursor-pointer">
			<span>{contactEmail[0]}</span>
		</div>
	)
}

export default Contact;