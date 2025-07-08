import  { use } from 'react';

const Hotjobs = ({jobsPromise}) => {

    const jobs= use(jobsPromise);
    
    return (
        <div>
           {jobs.length}
        </div>
    );
};

export default Hotjobs;