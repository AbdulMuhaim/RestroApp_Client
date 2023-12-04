import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../utils/Axios'

function Campaigns() {

  const[leadSCount,setLeadsCount] = useState([])

  useEffect(()=>{

    axiosInstance('/leadscount').then((res)=>{
      setLeadsCount(res.data.leadCounts)
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  

  return (
    <div>

<div className="bg-purple-900 w-full h-20 flex items-center justify-start">
  <h1 className="text-4xl text-white font-semibold flex items-center ml-10 gap-5">
  <Link to={"/"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg></Link>
    My Campaigns
  </h1>
</div>
<br /><br />
<h1 className='text-xl font-bold ml-5 text-purple-700'>Chennai Leads</h1>
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-5 mb-40 relative p-5">

      <div className="flex-1 flex flex-col items-center md:items-start bg-white rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-1000 p-5">
        <h1 className="text-lg font-semibold text-12222E mt-3 mb-3">ASSIGNED</h1>
        <h6 className="text-888888 text-lg md:text-xl font-bold">{leadSCount.totalLeads}</h6>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start bg-white rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-1000 p-5">
        <h1 className="text-lg font-semibold text-12222E mt-3 mb-3">OPENED</h1>
        <h6 className="text-888888 text-lg md:text-xl font-bold"> {leadSCount.followup}</h6>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start bg-white rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-1000 p-5">
        <h1 className="text-lg font-semibold text-12222E mt-3 mb-3">IN PROGRESS</h1>
        <h6 className="text-888888 text-lg md:text-xl font-bold">{leadSCount.connected}</h6>
      </div>
    </div>

    </div>
  )
}

export default Campaigns