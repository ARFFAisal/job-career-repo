import React from 'react';
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                </div>
                <div className='flex-1'>
                    
                    <motion.h1 initial = {{scale: 0}} animate={
                        {
                            scale: 1,
                            transition:{duration: 4}
                        }
                    } 
                 className="text-5xl font-bold">Exciting Remove <motion.span animate={{
                    color: ['#ff5733', '#74dd27', '#2783dd',],
                    transition: {duration: 2, repeat: Infinity}
                 }}>Job</motion.span> are offering</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;