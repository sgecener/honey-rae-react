import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/user";
import "./Employees.css";
import '../tickets/tickets.css'

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArr) => {
      setEmployees(employeesArr);
    });
  }, []);

  return (
    <div className="tickets-container">
        <h2>Employees</h2>
        <div className="employees">
        {employees.map((employeeObj) => {
            return <User user={employeeObj} key={employeeObj.id} />;
        })}
        </div>
    </div>
  );
};
