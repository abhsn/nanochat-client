import { MoreHoriz, PersonAddAlt } from "@mui/icons-material";
import { Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

function Contacts() {
	const [openLogOut, setOpenLogOut] = useState(false);
	const { logOut } = useContext(AuthContext);

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
			<div className="flex flex-col mt-2 gap-2">
				<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
				<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
				<Skeleton variant="rounded" height={60} width={"full"} className="mx-2" />
			</div>

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