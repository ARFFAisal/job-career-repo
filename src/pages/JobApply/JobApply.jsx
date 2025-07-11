import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    console.log(jobId, user);



    const handleApplySubmit = e =>{
        e.preventDefault();
        const apply = e.target;
        const linkdin = apply.linkdin.value;
        const github = apply.github.value;
        const resume = apply.resume.value;
        console.log(linkdin,github,resume);

        const application = {
            jobId,
            applicant: user.email,
            linkdin,
            github,
            resume
        } 

        axios.post('http://localhost:3000/applications', application)
        .then(res=> {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h3 className='text-4xl'>Apply Job for</h3>

            <form onSubmit={handleApplySubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Linkdin Link</label>
                    <input type="url" name="linkdin" className="input" placeholder="Linkdin Link" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name="github" className="input" placeholder="GitHub" />

                    <label className="label">Resume</label>
                    <input type="url" name="resume" className="input" placeholder="Resume" />

                    <button type="submit" className='btn'>Apply</button>
                </fieldset>
                
            </form>
        </div>
    );
};

export default JobApply;