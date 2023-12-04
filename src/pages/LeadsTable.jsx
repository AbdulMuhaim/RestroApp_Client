import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/Axios";

const TableExample = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/fetch_leads")
      .then((res) => {
        setLeads(res.data.leads);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    city: "",
    mobile: "",
    status: "Pending",
  });

  const navigate = useNavigate();


  const handleStatusChange = async (id, selectedStatus) => {
    await axiosInstance
      .post("/setStatus", { id, selectedStatus })
    
    setLeads((prevLeads) => {
      if (prevLeads.length === 0) {
        return [{ ...prevLeads[0], status: selectedStatus }];
      }
        return prevLeads.map((lead) =>
        lead._id === id ? { ...lead, status: selectedStatus } : lead
      );
    });
  };
  

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  const handleAddLead = async () => {
    await axiosInstance.post("/new_lead", newLead);
  
    setLeads((prevLeads) => {
      if (prevLeads.length === 0) {
        return [{ ...newLead, id: 1 }];
      }
        return [...prevLeads, { ...newLead, id: prevLeads.length + 1 }];
    });
  
    setModalOpen(false);
    setNewLead({
      name: "",
      city: "",
      mobile: "",
      status: "Pending",
    });
  };
  

  return (
    <>
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
          <button
            onClick={handleModalOpen}
            className="bg-blue-600 p-3 rounded-xl text-white"
          >
            Add new Lead
          </button>
        </div>

        <div className="overflow-x-auto">
          <h1 className="text-lg font-bold">New Leads</h1>
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leads
                .filter((lead) => lead.status === "Pending")
                .map((lead) => (
                  <tr key={lead._id}>
                    <td className="py-2 px-6 border-b">{lead.name}</td>
                    <td className="py-2 px-6 border-b">{lead.city}</td>
                    <td className="py-2 px-6 border-b">{lead.mobile}</td>
                    <td className="py-2 px-6 border-b">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleStatusChange(lead._id, e.target.value)
                        }
                        className="bg-white border rounded px-3 py-1"
                      >
                        <option value="Connected">Connected</option>
                        <option value="Not Connected">Not Connected</option>
                        <option value="Followup">Follow-up</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 w-96">
            <h2 className="text-2xl font-semibold mb-4">Add New Lead</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={newLead.name}
                  onChange={(e) =>
                    setNewLead({ ...newLead, name: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  value={newLead.city}
                  onChange={(e) =>
                    setNewLead({ ...newLead, city: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  value={newLead.contactNumber}
                  onChange={(e) =>
                    setNewLead({ ...newLead, mobile: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddLead}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TableExample;
