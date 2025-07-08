import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, jobType, company, category} = useLoaderData();
    
    return (
        <div>
            <h1 className='text-4xl'> {company}</h1>
            <p>{jobType}</p>
            <p>{title}</p>
            <p>{category}</p>
        </div>
    );
};

export default JobDetails;