import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

function Cards(props) {
  // console.log(props.data);
  // let grade = "Pending";

  // props.data.map((data) => {
  //   if(data.grade == "") {
  //     data.grade == "Pending";
  //   }
  // })

  return (
    <div>
      <Card style={{ height: "48rem" }}>
        <CardBody>
          <CardTitle tag="h5">{props.data.dba}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.data.boro}
          </CardSubtitle>
          <CardText>Grade: {props.data.grade}</CardText>
          <CardText>Complaints: {props.data.violation_description}</CardText>
          <Button></Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
