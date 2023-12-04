import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/Axios";

function NotConnectedLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/fetch_notconnectedleads")
      .then((res) => {
        setLeads(res.data.leads);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate()

  return (
    <div>
      <div className="bg-purple-900 w-full h-20 flex items-center justify-center">
        <h1 className="text-4xl text-white font-semibold ">BROMAG INDIA </h1>
      </div>

      <div className="container mx-auto p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-5 mb-3">
          <button className="bg-green-600 p-3 rounded-xl text-white" onClick={()=>navigate('/leads')} >Go back</button>
        </div>
        <div className="overflow-x-auto">
            <h1 className="text-lg font-bold">Not Connected Leads</h1>
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-gray-700 border-b text-left">
                  Name
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-700 border-b text-left">
                  City
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-700 border-b text-left">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="py-2 px-6 border-b">{lead.name}</td>
                  <td className="py-2 px-6 border-b">{lead.city}</td>
                  <td className="py-2 px-6 border-b">{lead.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NotConnectedLeads;
