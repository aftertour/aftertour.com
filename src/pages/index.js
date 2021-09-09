import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"
import Scene from "../components/index/scene"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="After Tours" />
    <Intro />
    <Photogrid />
    <Scene />
  </Layout>
)

export default IndexPage
