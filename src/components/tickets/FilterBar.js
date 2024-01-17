import { useNavigate } from "react-router-dom";

export const FilterBar = ({
  setShowEmergency,
  setShowOpenOnly,
  setSearchTerm,
  currentUser,
}) => {
  const navigate = useNavigate();

  return (
    <div className="filter-btn">
      {currentUser.isStaff ? (
        <>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setShowEmergency(true);
            }}
          >
            Emergency
          </button>

          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowEmergency(false);
            }}
          >
            Show All
          </button>

          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Tickets"
            className="ticket-search"
          />
        </>
      ) : (
        <>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              navigate("/tickets/create");
            }}
          >
            Create Ticket
          </button>
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setShowOpenOnly(true);
            }}
          >
            Open Tickets
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowOpenOnly(false);
            }}
          >
            All My Tickets
          </button>
        </>
      )}
    </div>
  );
};
