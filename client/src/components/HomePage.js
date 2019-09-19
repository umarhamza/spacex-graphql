import React from 'react'
import Header from './Header'
import { Row, LaunchInfo } from './StyledComponents'

const Home = () => {
    return (
    <Row className="row py-md-5 pl-md-5 pr-md-4 mx-0">
        <Header />
        <LaunchInfo className="col col-12 col-md-7 py-5 pr-5 my-md-n4" />
    </Row>
    )
}

export default Home
