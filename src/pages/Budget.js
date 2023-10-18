import TravelList from "../components/TravelList";

function Budget({ dests, searchTerm }) {
  const lowBudgets = dests.filter((dest) => {
    const numStr = dest.Price.replace("$", ""); // "$1200" => "1200"
    const priceNum = parseInt(numStr); // "1200" => 1200
    return priceNum < 1500;
    // return parseInt(dest.Price.replace("$", "")) < 1500
  });
  return (
    <div>
      <TravelList searchTerm={searchTerm} dests={lowBudgets} />
    </div>
  );
}

export default Budget;
