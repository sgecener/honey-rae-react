export const FilterBar = ({ setShowEmergency, setSearchTerm }) => {
  return (
    <div className="filter-btn">
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
    </div>
  );
};
