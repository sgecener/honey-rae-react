import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome";
import { CustomerNav } from "../components/nav/CustomerNav";
import { TicketList } from "../components/tickets/TicketList";
import { TicketForm } from "../components/forms/TicketForm";
import { EditTicketForm } from "../components/forms/EditTicket.Form";
import { UserForm } from "../components/forms/UserForm";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets">
          <Route index element={<TicketList currentUser={currentUser} />} />
          <Route
            path="create"
            element={<TicketForm currentUser={currentUser} />}
          />
          <Route
            path="edit/:ticketId"
            element={<EditTicketForm currentUser={currentUser} />}
          />
        </Route>
        <Route path="profile" element={<UserForm currentUser={currentUser}/>} />

      </Route>
    </Routes>
  );
};
