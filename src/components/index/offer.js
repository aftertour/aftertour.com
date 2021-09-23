import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Offer = () => {
  return (
    <section className="pb-md-7 z-2 text-soft">
      <div className="container-fluid">
        <div className="py-6 py-md-7 mt-7 px-md-3">

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div class="row">
                <div class="col-12">
                  <div class="card text-dark border-none shadow shadow-soft px-4  mt-7">
                    <div class="card-body text-center text-md-left">
                      <div class="row align-items-center">
                        <div class="col-md-6">
                          <h2 class="mb-3 text-dark">Experience the after-hours guided by a former tourist turned partyholic.</h2>
                          <p class="mb-4">
                            Learn how to find underground events on your own, how to stay safe as a tourist, and how to find everything you need to keep your nightlife interesting.
                          </p>
                          <a href="#" class="btn btn-primary">
                            <span class="mr-1">
                              <span class="fas fa-file-invoice"></span>
                            </span>
                            Check Careers
                          </a>
                        </div>
                        <div class="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                          <StaticImage
                            className="gridphoto"
                            src="../../images/me.jpg"
                            alt="me"
                            placeholder="dominantColor"
                            width="200px"
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
