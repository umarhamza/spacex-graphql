import React from 'react'

const MissionKey = () => {
    return (
        <div className="mt-3 mb-4 d-flex flex-wrap">
            <p className="mr-3 mb-0">
                <span className="px-3 mr-2 bg-success" /> = Success
            </p>
            <p className="mr-3 mb-0">
                <span className="px-3 mr-2 bg-danger" /> = Fail
            </p>
            <p className="mr-3 mb-0">            
                <span className="px-3 mr-2 bg-warning" /> = Pending
            </p>
        </div>
    )
}

export default MissionKey
