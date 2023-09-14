import'./trip.css';
import React from "react";
import TripData from "./TripData/TripData";
import TripImg1 from "../../assets/5.jpg";
import TripImg2 from "../../assets/8.jpg";
import TripImg3 from "../../assets/6.jpg";

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        distinctio ipsam vero odit fugit porro at suscipit enim ullam
        voluptatem.
      </p>
      <div className="tripcard">
        <TripData
          image={TripImg1}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quo maiores aliquam ipsum vel tenetur explicabo quae voluptate! Eveniet
        nam ab in, dolorum iste hic voluptatibus unde reprehenderit obcaecati
        odio? Debitis reiciendis obcaecati asperiores, impedit esse excepturi,
        vero voluptatibus in repellendus, sunt facilis voluptatem tenetur
        cupiditate beatae enim dolorum quod ipsam."
        />
        <TripData
          image={TripImg2}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quo maiores aliquam ipsum vel tenetur explicabo quae voluptate! Eveniet
        nam ab in, dolorum iste hic voluptatibus unde reprehenderit obcaecati
        odio? Debitis reiciendis obcaecati asperiores, impedit esse excepturi,
        vero voluptatibus in repellendus, sunt facilis voluptatem tenetur
        cupiditate beatae enim dolorum quod ipsam."
        />
        <TripData
          image={TripImg3}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quo maiores aliquam ipsum vel tenetur explicabo quae voluptate! Eveniet
        nam ab in, dolorum iste hic voluptatibus unde reprehenderit obcaecati
        odio? Debitis reiciendis obcaecati asperiores, impedit esse excepturi,
        vero voluptatibus in repellendus, sunt facilis voluptatem tenetur
        cupiditate beatae enim dolorum quod ipsam."
        />
      </div>
    </div>
  );
}
