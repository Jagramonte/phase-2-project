import React, { useEffect, useMemo, useState } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

function ReviewCard({ dest }) {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src={dest.Image} />
      </Grid.Column>
      <Grid.Column width={9}>
        <Container textAlign="left">{dest.Review}</Container>
      </Grid.Column>
    </Grid>
  );
}

function ReviewList({ dests, searchTerm }) {
  const filteredDests = !searchTerm
  ? dests
  : dests.filter((dest) => {
      console.log({ dest, searchTerm });
      const searchTerm1 = searchTerm.toLowerCase();
      return (
        dest.Review?.toLowerCase().includes(searchTerm1) 
      );
    });
  return (
    <Grid>
      {filteredDests.map((dest) => {
        return <ReviewCard key={dest.id} dest={dest} />;
      })}
    </Grid>
  );
}

export default ReviewList;
