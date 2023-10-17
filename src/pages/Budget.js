import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Card, Icon, Image } from "semantic-ui-react";


function DestCard({ dest }) {

  const [flipped, setFlipped] = useState(false);

  if (parseInt ( dest.Price.replace("$","") ) < 1500)

  return (
    <Card onClick={() => setFlipped((state) => !state)}>
      <Image src={dest.Image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{dest.Location}</Card.Header>
        <Card.Meta>{dest.Continent}</Card.Meta>
        <Card.Description>
          {flipped ? dest.Description : dest.Price}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          10 Stars
        </a>
      </Card.Content>
    </Card>
  );
}

function TravelList({ searchTerm }) {
  const [dests, setDests] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/destinations")
      .then((res) => res.json())
      .then((data) => setDests(data))
      .catch((err) => console.error("service call fail for destination", err));
  }, []);
  // {
  //     "Id": 1,
  //     "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjQOrwlJQ9zyOiGepWXP_-JeZk3R4l399Tw&usqp=CAU",
  //     "Continent": "North America",
  //     "Location": "New York",
  //     "Description": "Travel to New York to experience the vibrant energy of a world-class city, with iconic landmarks like Times Square, Central Park, and the Statue of Liberty, and indulge in a diverse culinary scene and cultural offerings. From Broadway shows to museums, there's something for everyone in the city that never sleeps.",
  //     "Review": "Traveling to New York with J&J Agency was a seamless and memorable experience, with top-notch accommodations, expert guides, and unforgettable city exploration.",
  //     "Price": "$1000 per person"
  // },
  const filteredDests = !searchTerm
    ? dests
    : dests.filter((dest) => {
        const searchTerm1 = searchTerm.toLowerCase();
        return (
          dest.Continent?.toLowerCase().includes(searchTerm1) ||
          dest.Location?.toLowerCase().includes(searchTerm1) ||
          dest.Description?.toLowerCase().includes(searchTerm1)
        );
      });
    
    return (
        <Card.Group>
         {filteredDests.map((dest) => {
            return <DestCard key={dest.Id} dest={dest} />;
      })}
        </Card.Group>
  );
}

function Budget() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="budget">
      <SearchBar setSearchTerm={setSearchTerm} />
      <TravelList searchTerm={searchTerm} />
    </div>
  );
}



 function BudgetFriendly(){
    return <div>budget</div>
 }

 export default Budget;