import { CiLocationOn,  } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, 
        job_type, salary} = job;
    return (
        <div className="card card-compact  p-4 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-xl font-normal">{company_name}</p>
    <div>
        <button className="px-5 py-2 mr-2 text-lg text-blue-400 border rounded font-extrabold
        border-blue-500">{remote_or_onsite}</button>
        <button className="px-5 py-2 mr-2 text-lg text-blue-400 border rounded font-extrabold
        border-blue-500">{job_type}</button>
    </div>
    <div className="flex  my-2 text-xl">
        <h2 className="flex mr-4"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</h2>
        <h2 className="flex "><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle> {salary}</h2>
    </div>
    <div className="card-actions ">
      <Link to={`/job/${id}`}>
      <button className="btn bg-gradient-to-r from-blue-400 to-violet-500">View Details</button>
      </Link>
    </div>
    
  </div>
</div>
    );
};

export default Job;