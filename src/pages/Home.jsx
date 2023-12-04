
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPhone, faTasks, faFileAlt, faChartBar, faWalking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const colors = ["bg-teal-500", "bg-blue-500", "bg-purple-500", "bg-yellow-500", "bg-red-500", "bg-green-500"];
const links = ["/campaigns","/leads"]
const names = ["My Campaigns","My Leads","My Tasks","My Report","Call Logs","Walk-in Leads"]

function Home() {

  return (  
    
    <div>

      <div className="bg-purple-900 w-full h-20 flex items-center justify-center">
        <h1 className="text-4xl text-white font-semibold ">BROMAG INDIA </h1>
      </div>
      <div className="flex justify-center items-center p-7">
        <h1 className="text-5xl text-center md:text-left lg:text-center xl:text-left">Welcome Abrar</h1>
      </div>

      <div className=" flex justify-center items-center">
        <button className="p-2 rounded-2xl w-44 text-white text-lg font-medium cursor-text bg-purple-900">Start Calling</button>
      </div>

      <div className="grid grid-cols-2 gap-4 p-10 ">
    {[faBullhorn, faPhone, faTasks, faFileAlt, faChartBar, faWalking].map((icon, index) => (
        <Link key={index} to={`${links[index]}`} className={`text-decoration-none`}>
      <div key={index} className={`p-4 h-48 border ${colors[index]} flex flex-col justify-center items-center rounded-3xl hover:shadow-md hover:scale-105 transition-transform duration-1000`}>
        <h2 className="text-white text-lg font-bold mb-2 cursor-pointer">{names[index]}</h2>
        <FontAwesomeIcon icon={icon} className="text-4xl cursor-pointer" />
      </div>
      </Link>
    ))}
  </div>

</div>

  );
}
export default Home;




