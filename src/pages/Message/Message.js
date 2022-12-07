import { Send } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

function Message() {
	return (
		<div className="col-start-4 col-end-13 relative h-screen flex flex-col">
			{/* user details */}
			<div className="bg-white p-4 drop-shadow-xl">
				<span className="font-bold text-xl">User</span>
			</div>

			{/* messages container */}
			<div className="overflow-scroll grow">
				<div className="flex m-4 flex-row-reverse">
					<div className="inline bg-blue-500 px-4 py-2 rounded-lg text-white">
						<span>Message</span>
					</div>
				</div>

				<div className="flex m-4">
					<div className="inline bg-gray-500 px-4 py-2 rounded-lg text-white">
						<span>Message</span>
					</div>
				</div>

				<div className="flex m-4 flex-row-reverse">
					<div className="inline bg-blue-500 px-4 py-2 rounded-lg text-white">
						<span>Message</span>
					</div>
				</div>
			</div>

			{/* text message box */}
			<form className="flex items-center w-full bg-white">
				<textarea className="border-gray-500 border-2 p-2 rounded-xl focus:outline-none resize-none w-full" required spellCheck minLength={1} rows="1" />
				<Tooltip title="Send">
					<IconButton aria-label="send message" size="large">
						<Send />
					</IconButton>
				</Tooltip>
			</form>
		</div>
	)
}

export default Message;