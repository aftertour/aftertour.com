import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Protip = props => (
    <section className="container-fluid py-4 bg-">
        <p className="text-info">Rave tip {props.num}: {props.tip}.</p>
    </section>
)

export default Protip