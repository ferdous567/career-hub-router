import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDatalength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="text-center" >
                <h3 className="text-5xl">Featured Jobs: {jobs.length}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     ratione suscipit porro.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto m-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center m-4'}>
                <button onClick={() => setDatalength(jobs.length)} 
                className="btn bg-gradient-to-r from-blue-400 to-violet-500
                text-white font-bold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;