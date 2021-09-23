import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import Seo from "../components/seo"

const tour = () => (
  <section className="section section-lg pt-7 blue text-soft">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-2 my-5">
            What to expect from your underground music tour
            <br />
          </h1>
          <ul>
            <li>
              we'll begin with a short chat over text or phone (number/link
              below)
            </li>
            <ul>
              <li>
                <div>I will ask you about your preferences regarding</div>
                <div>music, social atmospheres, and when you want to go</div>
              </li>
              <li>
                you can tell me about your drug and sexual preferences as well
              </li>
              <li>
                the more information you give me, the easier it is for me to
                choose the best nightclub with the right scene
              </li>
            </ul>
            <li>
              I will then take 15 minutes for planning and contact you back
            </li>
            <li>we will meet at a bar or cafe near the final venue</li>
            <ul>
              <li>
                we'll chat for a little bit, have a few drinks, and discuss
                the local party culture in all its aspects
              </li>
              <li>we'll stay there for 1-2 hours</li>
              <li>
                I will collect the payment for the tour while we're there
              </li>
            </ul>
            <li>
              we will then either walk to the venue or I will order us an Uber
              (complimentary)
            </li>
            <li>
              entry for most events is between 100 to 600 pesos, but usually
              250, and sometimes free if we arrive early
            </li>
            <li>
              typical drinks costs are:
              <ul>
                <li>water 50</li>
                <li>beer 80</li>
                <li>shot 100</li>
                <li>standard drink 150</li>
              </ul>
            </li>
            <li>
              I will stay at the venue the entire night with my phone on at
              all times.
            </li>
            <li>
              before we party we will start a group chat in case anyone wants
              to regroup for shots or whatever.
            </li>
            <ul>
              <li>
                I am almost always at the front or near a speaker and I'm
                usually one of the last people to leave.
              </li>
              <li>
                we will hang out until the very end of the night if you want
                to.
              </li>
            </ul>
            <li>
              most nightclubs/raves are open from 9 to 6am
              <ul>
                <li>they usually peak from 2 to 3 am</li>
                <li>some clubs open from 2pm to 12am and peak at 9-10pm</li>
              </ul>
            </li>
            <li>the cost is $1000 pesos per person</li>
            <ul>
              <li>this does not include food, drinks, or entry</li>
            </ul>
            <li>expect to have fun</li>
          </ul>
        </div>
      </div>
      <div className="row text-center mt-6 justify-content-center">
        <div className="col-6">
          <div className="card shadow-soft shadow-inset pt-5 px-3 text-dark">
            <p>
              <a
                href="https://wa.me/525512015702"
                className="btn btn-spotify mx-4"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
              <a
                href="https://wa.me/525512015702"
                className="btn btn-soft mx-4" href="tel:+52 55 1201 5702"
              >+52 55 1201 5702
              </a>

            </p>
            <p className="mt-3">
              "Hi, I'd like to book a tour, my name is _______"
              <br />
              I'll take it from there.
              <br />
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
)

export default tour
