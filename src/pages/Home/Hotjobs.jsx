import  { use } from 'react';
import JobCard from '../Shared/JobCard';

const Hotjobs = ({jobsPromise}) => {

    const jobs= use(jobsPromise);
    
    return (
        <div>
            <h2 className='text-4xl'>Hot jobs of the day</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
            jobs.map(job => <JobCard key = {job._id}  job = {job}></JobCard> )
           }
           </div>
        </div>
    );
};

export default Hotjobs;