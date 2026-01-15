import { useState, useEffect } from 'react'
import CampaignTable from './components/campaignTable.tsx';
import { API } from './constants.ts';
import './App.css'

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [campaigns, setCampaigns] = useState<Array<any>>([]);
  
  useEffect(() => {
    async function fetchCampaigns() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/campaigns`);
        const { data } = await res.json();
        
        setCampaigns(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-hidden relative flex flex-col items-center p-10 bg-gray-50 text-gray-800"> 
        <h1 className="text-5xl font-bold m-8 text-slate-700">Campaign Performance Monitor</h1>
        <div className='h-full absolute top-48'>
          {loading ? (
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className="text-xl text-slate-500">Loading campaign data...</p>
              <div className='h-6 w-6 border-b-2 border-current rounded-full animate-spin'></div>
            </div>
          ) : <CampaignTable campaigns={campaigns} /> }
        </div>
    </div>
  )
}

export default App
