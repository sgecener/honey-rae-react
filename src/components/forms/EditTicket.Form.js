import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTicketById, updateTicket } from "../../services/TicketService.js"

export const EditTicketForm = ({ currentUser }) => {
	const [ticket, setTicket] = useState({
		description: "",
		emergency: false,
	})

	const { ticketId } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		getTicketById(ticketId).then((ticket) => {
			const ticketObj = ticket[0]
			setTicket(ticketObj)
		})
		
	}, [ticketId])

	const handleInputChange = (event) => {
		event.preventDefault()

		const stateCopy = { ...ticket }
		stateCopy[event.target.name] = event.target.value
		setTicket(stateCopy)
	}

	const handleEdit = (event) => {
		event.preventDefault()

		const editedTicket = {
			id: ticket.id,
			userId: currentUser.id,
			description: ticket.description,
			emergency: ticket.emergency,
			dateCompleted: ticket.dateCompleted,
		}

		updateTicket(editedTicket).then(() => {
			navigate("/tickets")
		})
	}

	return (
		<form>
			<h2>Edit Ticket# {ticketId}</h2>
			<fieldset>
				<div className="form-group">
					Description:
					<input
						type="text"
						name="description"
						value={ticket?.description ? ticket.description : ""}
						required
						onChange={handleInputChange}
						className="form-control"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label>
						Emergency
						<input
							type="checkbox"
							name="emergency"
							checked={ticket?.emergency ? true : false}
							onChange={(event) => {
								const ticketCopy = { ...ticket }
								ticketCopy.emergency = event.target.checked
								setTicket(ticketCopy)
							}}
						/>
					</label>
					<button className="form-btn btn-warning" onClick={handleEdit}>
						Submit
					</button>
				</div>
			</fieldset>
		</form>
	)
}