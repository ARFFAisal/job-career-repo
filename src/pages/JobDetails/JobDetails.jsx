import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title, jobType, company, category} = useLoaderData();
    
    return (
        <div>
            <h1 className='text-4xl'> {company}</h1>
            <p>{jobType}</p>
            <p>{title}</p>
            <p>{category}</p>
          <Link to={`/jobapply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;