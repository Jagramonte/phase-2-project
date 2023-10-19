import TravelList from "../components/TravelList";
import Customize from "./Customize";

function PreplannedDestinations({ dests, searchTerm }) {
  return (
    <div>
      <TravelList searchTerm={searchTerm} dests={dests} />
    </div>
  );
}

export default PreplannedDestinations;
