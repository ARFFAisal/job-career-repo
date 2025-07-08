import React from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res=> res.json())
const Home = () => {

    


    return (
        <div>
            <Banner></Banner>
            <Hotjobs jobsPromise={jobsPromise} ></Hotjobs>
        </div>
    );
};

export default Home;