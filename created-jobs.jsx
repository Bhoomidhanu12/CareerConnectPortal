import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { getMyJobs } from '../api/apijobs';
import useFetch from '../hooks/use-fetch';
import JobCard from './job-card';

const CreatedJobs = () => {
    const{user} = useUser();
    const{
        loading:loadingCreatedJobs,
        data:createdJobs,
        fn:fnCreatedJobs,
    }=useFetch(getMyJobs,{
        employeer_id:user.id,
    });
    useEffect(()=>{
        fnCreatedJobs();
    },[]);
    if (loadingCreatedJobs){
        return <BarLoader className='mb-4' width={"100%"} color="#36d7b7"/>;
        
    }
    
  return (
    <div>
        <div className="mt-8 grid md:grid-cols-2 lh:grid-cols-3 gap-4">
            {createdJobs?.length?(
                createdJobs.map((job)=>{
                    return (
                        <JobCard
                        key={job.id}
                        job={job}
                        savedInit={job?.saved?.length>0}
                        isMyJob
                        />
                    );
                })
            ):(
                <div>No Jobs Found</div>
            )}
        </div>
    </div>
  )
}

export default CreatedJobs;