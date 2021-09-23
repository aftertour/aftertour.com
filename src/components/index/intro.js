import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {
  return (
    <section
      className="text-soft"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100 blue-black">
          <div className="col-6 col-md-6 d-flex flex-column justify-content-center px-4">
            <div className="d-md-none">
              <p className="m-0">
                CDMX
              </p>
              <h1 className="display-4 text-danger">Underground Music Tours</h1>
              <p>
                from pre-gaming to after-partying
              </p>
            </div>
            <div className="d-none d-md-block ml-4">
              <p className="m-0 h4">
                CDMX
              </p>
              <h1 className="display-3 text-danger">Underground Music Tours</h1>
              <p className="h4">
                from pre-gaming to after-partying
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 pr-0 h-100 overflow-hidden ">
            <div className="photogridrow">
              <div className="photogridcol">
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/1.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/2.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/3.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/4.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/5.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/6.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
              </div>

              <div className="photogridcol">
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/10.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/11.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/12.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/13.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/14.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
                <StaticImage
                  className="gridphoto"
                  src="../../images/halfgrid/15.jpg"
                  alt="me"
                  placeholder="dominantColor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
