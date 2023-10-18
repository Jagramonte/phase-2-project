import TravelList from "../components/TravelList";
import Customize from "./Customize"

function PreplannedDestinations({ dests, searchTerm }) {
  return (
    <div className="pre-planned">
      <TravelList searchTerm={searchTerm} dests={dests} />
    </div>
  );
}

export default PreplannedDestinations;
