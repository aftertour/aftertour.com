import React from "react"
import { Accordion } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Protip = props => (
  <section className="container-fluid py-4">
    <p className="lead text-info">Protip {props.num}: {props.tip}.</p>




    <Accordion.Toggle as="p" eventKey={props.num}>
      <p className="text-dark">
        <FontAwesomeIcon
          icon="leaf"
          size="1x"
          color="light"
          className="shadow-lg"
        />{" "}
        {props.question}
      </p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={props.num}>
      <p className="text-white px-4">{props.answer}</p>
    </Accordion.Collapse>
  </section>
)

export default Protip