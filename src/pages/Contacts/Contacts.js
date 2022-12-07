import { PersonAddAlt } from "@mui/icons-material";
import { IconButton, Skeleton, Tooltip } from "@mui/material";

function Contacts() {
	return (
		<div className="h-screen col-start-1 col-end-4 top-0 left-0 relative bg-gray-100">
			<h3 className="text-2xl font-bold text-gray-500 mt-2 ml-2">Messages</h3>

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