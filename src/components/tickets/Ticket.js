import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { assignTicket, updateTicket } from "../../services/TicketService";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployee] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArr) => {
      setEmployee(employeesArr);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
      const currentEmployee = employees.find((employee) => employee.userId === currentUser.id)


    const newEmployeeTicket = {
      employeeId : currentEmployee.id, 
      serviceTicketId: ticket.id
    }

    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets()
    })
  }

  const handleClose = () => {
    const closedTicket = {
        id: ticket.id,
        userId: ticket.userId,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: new Date()
    }

    updateTicket(closedTicket).then(() => {
      getAndSetTickets()
    })
  }

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "none"}
          </div>
        </div>
        <div>
          <div className="ticket-info">Emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn-secondary" onClick={handleClaim}>Claim </button>
          ) : (
            ""
          )}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn-warning" onClick={handleClose}>Close</button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
