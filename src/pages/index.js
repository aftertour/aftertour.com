import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"
import Scene from "../components/index/scene"
import Offer from "../components/index/offer"
import Tour from "../components/tour"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="After Tours" />
    <Intro />
    <Photogrid />
    <Offer />
    {/* <Protip num="1" tip="never grab someone's neck from behind" /> */}
    <Scene />
    <Tour />
  </Layout>
)

export default IndexPage
