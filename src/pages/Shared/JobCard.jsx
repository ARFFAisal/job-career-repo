import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, location, requirements, jobType, category, applicationDeadline, description, company, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex items-center gap-3'>
                <div>
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                </div>
                <div>
                    <h1 className='text-4xl'>{company}</h1>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions ">
                    {
                        requirements.map(skill => <div className="badge badge-outline">{skill}</div>)
                    }

                </div>
                <div className='card-actions justify-end'>
                    <Link to={`/jobs/${_id}`}><button className='btn'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;