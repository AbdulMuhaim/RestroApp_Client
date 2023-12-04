import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MyCampaigns from './pages/MyCampaigns';
import MyLeads from './pages/MyLeads';
import LeadsTable from './pages/LeadsTable';
import ConnectedLeads from './pages/ConnectedLeads';
import FollowUpLeads from './pages/FollowUpLeads';
import NotConnectedLeads from './pages/NotConnectedLeads';



const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<MyCampaigns />} />
        <Route path="/leads" element={<MyLeads />} />
        <Route path='/leads_table' element={<LeadsTable />} />
        <Route path='/connected_leads' element={<ConnectedLeads />} />
        <Route path='/followup_leads' element={<FollowUpLeads />} />
        <Route path='/notconnected_leads' element={<NotConnectedLeads />} />


      </Routes>
    </Router>
  );
};

export default App;
