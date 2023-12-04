import { Link } from 'react-router-dom';

const MyLeads = () => {
  const cardData = [
    { name: "New Leads", description: "Leads, which haven't been called so far" },
    { name: "Follow-up Leads", description: "Leads, which are scheduled to be called later" },
    { name: "Connected Leads", description: "Leads, which are connected" },
    { name: "Not Connected Leads", description: "Leads, which weren't connected in the previous attempt" }
  ];

  const links = ["/leads_table","/followup_leads","/connected_leads","/notconnected_leads"];

  return (
    <div>
      <div className="bg-purple-900 w-full h-20 flex items-center justify-start">
        <h1 className="text-4xl text-white font-semibold flex items-center ml-10 gap-5">
          <Link to={"/"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg></Link>
          My Leads
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 sm:p-10">
        {cardData.map((card, index) => (
          <Link key={index} to={`${links[index]}`} className="text-decoration-none">
            <div className="p-4 bg-slate-100 h-48 border flex flex-col justify-center items-center shadow-xl border-gray-200 transition-transform duration-700 hover:bg-gray-200 hover:border-gray-300">
              <div className="flex items-center">
                <h2 className="text-black text-lg md:text-xl lg:text-2xl font-bold mb-2 cursor-pointer">{card.name}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-4 mb-2" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <p className="text-sm md:text-base lg:text-lg">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyLeads;
