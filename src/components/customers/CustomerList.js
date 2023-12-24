import { useEffect, useState } from "react";
import { User } from "../../users/user";
import { getNonStaffUsers } from "../../services/userService";
import "./Customers.css";
import '../tickets/tickets.css'

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArr) => {
      setCustomers(customerArr);
    });
  }, []);

  return (
    <div className="tickets-container">
      <h2>Customers</h2>
      <div className="customers">
        {customers.map((customerObj) => {
          return <User user={customerObj} key={customerObj.id} />;
        })}
      </div>
    </div>
  );
};
