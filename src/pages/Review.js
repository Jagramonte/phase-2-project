import React, { useEffect, useState } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

function ReviewCard({ review }) {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src="/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column width={9}>
        <Container textAlign="left">Left Aligned</Container>
      </Grid.Column>
    </Grid>
  );
}

function ReviewList({ dests }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  });
  return (
    <Grid>
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}
    </Grid>
  );
}

export default ReviewList;
