import React from 'react'
import className from 'classnames'
import Moment from 'react-moment'
import { Button, Divider } from './StyledComponents'


const titleStyle = {
    margin: 0,
    lineHeight: '30px',
    verticalAlign: 'middle'
}

const LaunchItem = ({launch:{flight_number, mission_name, launch_date_local, launch_success}}) => {
    // console.log(flight_number, mission_name, launch_date_local, launch_success)

    let status = {
        color: 'green',
        success: true,
        msg: 'SUCCESS'
    }

    if (launch_success === false) {
        status = {
            color: 'red',
            success: false,
            msg: 'FAILED'
        }
    } else if (launch_success === null) {
        status = {
            color: 'orange',
            success: null,
            msg: 'PENDING'
        }
    } 

    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-8">
                    <h4 style={titleStyle}>Mission: 
                    <span className={className({
                        'text-success' : launch_success === true,
                        'text-danger' : launch_success === false,
                        'text-warning' : launch_success === null
                    })}>{ mission_name }</span></h4>
                </div>
                <div className="col-md-4 text-right">
                    <Button to={`/launches/${flight_number}`}>Launch Details</Button>
                </div>
            </div>
            <Divider style={{backgroundColor: status.color}}>
                {status.msg}                
            </Divider>
            <p className="mb-0">Date: <Moment format="DD-MM-YYYY HH:mm">{ launch_date_local }</Moment><br />
            Time: <Moment format="HH:mm">{ launch_date_local }</Moment></p>
        </div>
    )
}

export default LaunchItem
