import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaceDetails from "./spaceDetails";
import axios from "axios";
function Space(props) {
  const loading = useState(props.loading);
  //const [noImage, setNoImage] = useState();
  const [rocket, setRocket] = useState([]);
  return (
    <div
      key={props.flight_number}
      className="d-flex justify-content-around my-2 mx-3" // added margin-y
    >
      {loading ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={props.links?.mission_patch_small}
            alt={props.mission_name}
          />
          <Card.Body>
            <Card.Title>Mission Name : {props.mission_name}</Card.Title>
            <Card.Text>Launch Date : {props.launch_date_local}</Card.Text>
            <Card.Text>Site Name : {props.site_name_long}</Card.Text>
            <SpaceDetails
              mission_name={props.mission_name}
              details={props.details}
              variant="primary"
            />
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Space;
