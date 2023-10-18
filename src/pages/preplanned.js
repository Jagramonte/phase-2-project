import TravelList from "../components/TravelList";

function PreplannedDestinations({ dests, searchTerm }) {
  return (
    <div className="pre-planned">
      <TravelList searchTerm={searchTerm} dests={dests} />
    </div>
  );
}

export default PreplannedDestinations;
