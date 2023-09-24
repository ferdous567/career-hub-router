import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    // console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(parseInt(id));
        toast('you have apply toast succesfully');

    };

    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-4 m-4 p-5">
                <div className="border md:col-span-3  p-5">
                    <h2 >Details comming here..</h2>
                    <h2 className="text-4xl">job Title: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border  p-5">
                <h2>Button salary others....</h2>
                <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-blue-500 to-pink-500 
                w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;