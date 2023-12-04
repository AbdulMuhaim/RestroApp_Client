import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/Axios";

function FollowUpLeads() {
  const [leads, setLeads] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/fetch_followupleads")
      .then((res) => {
        setLeads(res.data.leads);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAttendant = async (id, selectedCallAttendant) => {
    await axiosInstance.post('/set_callattendant',{id,selectedCallAttendant})
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead._id === id
          ? { ...lead, callAttendant: selectedCallAttendant }
          : lead
      )
    );
  };

  const handleDateChange = async (id, date) => {
    await axiosInstance.post('/set_folowupdate',{id,date})
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead._id === id ? { ...lead, followupDate: date } : lead
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-purple-900 w-full h-20 flex items-center justify-center">
        <h1 className="text-4xl text-white font-semibold ">BROMAG INDIA </h1>
      </div>

      <div className="container mx-auto p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-5 mb-3">
          <button
            className="bg-green-600 p-3 rounded-xl text-white"
            onClick={() => navigate("/leads")}
          >
            Go back
          </button>
        </div>
        <div className="overflow-x-auto">
          <h1 className="text-lg font-bold">Follow Up Leads</h1>
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
                <th className="py-3 px-6 bg-gray-200 text-gray-700 border-b text-left">
                  Call Attendant
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-700 border-b text-left">
                  Next Date
                </th>
              </tr>
            </thead>
            {leads.length===0? <p className="text-lg font-semibold ml-2 p-2">! No leads available at the moment.</p> :<tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td className="py-2 px-6 border-b">{lead.name}</td>
                  <td className="py-2 px-6 border-b">{lead.city}</td>
                  <td className="py-2 px-6 border-b">{lead.mobile}</td>
                  <td className="py-2 px-6 border-b">
                    <select
                      value={lead.callAttendant}
                      onChange={(e) =>
                        handleAttendant(lead._id, e.target.value)
                      }
                      className="bg-white border rounded px-3 py-1"
                    >
                      <option value="Manager">Manager</option>
                      <option value="Chef">Chef</option>
                      <option value="Cashier">Cashier</option>
                      <option value="Owner">Owner</option>
                    </select>
                  </td>

                  {lead.followupDate && (
                    <td className="py-2 px-6 border-b">
                      <DatePicker
                        selected={new Date(lead.followupDate)}
                        onChange={(date) => handleDateChange(lead._id, date)}
                        dateFormat="MM/dd/yyyy"
                        className="bg-white border rounded px-3 py-1"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>}
          </table>
        </div>
      </div>
    </div>
  );
}

export default FollowUpLeads;
