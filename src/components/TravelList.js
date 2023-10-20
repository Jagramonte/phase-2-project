import { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./TravelList.css";

function DestCard({ dest }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <Card onClick={() => setFlipped((state) => !state)} className="cardDesign">
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
          <Icon name="star"/>
          10 stars
        </a>
      </Card.Content>
    </Card>
  );
}

function TravelList({ searchTerm, dests }) {
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
        console.log({ dest, searchTerm });
        const searchTerm1 = searchTerm.toLowerCase();
        return (
          dest.Continent?.toLowerCase().includes(searchTerm1) ||
          dest.Location?.toLowerCase().includes(searchTerm1) ||
          dest.Description?.toLowerCase().includes(searchTerm1)
        );
      });
  return (
    <Card.Group className="displayCards">
      {filteredDests.map((dest) => {
        return <DestCard key={dest.Id} dest={dest} />;
      })}
    </Card.Group>
  );
}

export default TravelList;
