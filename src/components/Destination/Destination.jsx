import React from "react";
import styles from "../Destination/destination.css";
import DestinationImg1 from "../../assets/1.jpg";
import DestinationImg2 from "../../assets/2.jpg";
import DestinationImg3 from "../../assets/3.jpg";
import DestinationImg4 from "../../assets/4.jpg";
import DestinationData from "./DestinationData/DestinationData";

export const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>tours give you the opportunity to see a lot, within a time frame </p>

      <DestinationData
        className="first-desc"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptates, consectetur, voluptatum sunt quae possimus saepe
        itaque tenetur id quidem corporis corrupti architecto ducimus
        error iste quod pariatur necessitatibus dolorum voluptatem debitis
        ad quibusdam neque ut similique. Nobis nam vero eum maxime quaerat
        distinctio voluptatem asperiores facere odio, minus, excepturi
        pariatur!"
        img1={DestinationImg1}
        img2={DestinationImg2}
      />

      <DestinationData
        className="first-desc-reverse"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptates, consectetur, voluptatum sunt quae possimus saepe
        itaque tenetur id quidem corporis corrupti architecto ducimus
        error iste quod pariatur necessitatibus dolorum voluptatem debitis
        ad quibusdam neque ut similique. Nobis nam vero eum maxime quaerat
        distinctio voluptatem asperiores facere odio, minus, excepturi
        pariatur!"
        img1={DestinationImg3}
        img2={DestinationImg4}
      />
    </div>
  );
};
