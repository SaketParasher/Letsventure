import React from 'react';

import JobItem from './JobItem';

const JobList = ({jobs}) => {

    return (
        <div>
            {jobs.length > 0 && (
                <>{jobs.map(job => <JobItem key={job._id} job={job} />)}</>
            )}
        </div>
    )
}

export default JobList
