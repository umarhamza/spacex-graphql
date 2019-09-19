import React, {Component} from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Header from './Header'
import { Row, LaunchInfo } from './StyledComponents'
import Moment from 'react-moment'

const LAUNCHQUERY = gql`
    query LaunchQuery($flight_number:Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

class LaunchDetail extends Component {
    render() {
        const id = parseInt(this.props.match.params.id || 1)
        
        return (
            <Row className="row py-md-5 pl-md-5 pr-md-4 mx-0">
                <Header />
                <LaunchInfo className="LaunchInfo col col-12 col-md-7 py-5 pr-5 my-md-n4">
                    <Query query={LAUNCHQUERY} variables={{flight_number: id}}>
                        { 
                            ({ loading, error, data }) => {
                                if(loading) {
                                    return (<h4>Loading</h4>)
                                } else if(error) {
                                    console.log(error)
                                    return (<h4>Error</h4>)
                                } else {
                                    const {mission_name, flight_number, launch_year, launch_success, launch_date_local, rocket: {rocket_id, rocket_name, rocket_type}} = data.launch
                                    return (
                                        <>
                                        <h1 className="display-4 my-3"><span style={{opacity: 0.7}}>Mission:</span> {mission_name}</h1>
                                        <h4 className="mb-3">Launch Details</h4>
                                        <ul className="list-group mb-5">
                                            <li className="list-group-item">Flight Number: {flight_number}</li>
                                            <li className="list-group-item">Launch Year: {launch_year}</li>
                                            <li className="list-group-item">Launch Successful: {String(launch_success)}</li>
                                            <li className="list-group-item">Launch Date: <Moment format="DD-MM-YYYY - HH:mm">{launch_date_local}</Moment></li>
                                            <li className="list-group-item">Rocket Type: {rocket_type}</li>
                                        </ul>
                                        <h4 className="mb-3">Rocket Details</h4>
                                        <ul className="list-group">
                                            <li className="list-group-item">Rocket ID: {rocket_id}</li>
                                            <li className="list-group-item">Rocket Name: {rocket_name}</li>
                                            <li className="list-group-item">Rocket Type: {rocket_type}</li>
                                        </ul>
                                        </>
                                    )
                                }
                            }
                        }
                    </Query>
                </LaunchInfo>
            </Row>
        );
    }

}


export default LaunchDetail  