import { MoreHoriz, PersonAddAlt } from "@mui/icons-material";
import { Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Contact from "./Contact";

function Contacts() {
	const [openLogOut, setOpenLogOut] = useState(false);
	const { logOut, user } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [contactsList, setContactsList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/all-messages', {
			headers: {
				authorization: `Bearer ${user.accessToken}`
			}
		})
			.then(res => res.json())
			.then(data => {
				if (data.msg === "revoked" || data.msg === "invalid") {
					toast.error('An error occurred. Please try to re-login.');
				} else {
					setLoading(false);
					setContactsList(data);
				}
			})
	}, []);

	return (
		<div className="h-screen col-start-1 col-end-4 top-0 left-0 relative bg-gray-100">
			<div className="flex justify-between items-center p-2 relative z-10">
				<h3 className="text-2xl font-bold text-gray-500">Messages</h3>
				<IconButton onClick={() => setOpenLogOut(!openLogOut)} aria-label="more" size="large">
					<MoreHoriz />
				</IconButton>
				{
					openLogOut && <span onClick={logOut} className="absolute right-2 top-14">
						<Button variant="contained">Log out</Button>
					</span>
				}
			</div>

			{/* skeletons while messages are being loaded */}
			{
				loading && <div className="flex flex-col mt-2 gap-2">
					<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
					<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
					<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
				</div>
			}

			{
				contactsList.length > 0 &&
				contactsList.map(contact => <Contact key={contact._id} contact={contact} currentUser={user.email}></Contact>)
			}

			{/* add new contact container */}
			<div className="absolute right-4 bottom-4">
				<Tooltip title="Add new contact">
					<IconButton aria-label="new contact" size="large">
						<PersonAddAlt />
					</IconButton>
				</Tooltip>
			</div>
		</div>
	)
}

export default Contacts;