import React, { Component } from 'react';
import gql from 'graphql-tag'; // following tutorial
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
 
// this is recommended on apollo site
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

class Launches extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if(error) console.log(error)
                            return 
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches
