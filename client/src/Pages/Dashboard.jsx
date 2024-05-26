import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import DashboardSidebar from '../componenets/DashboardSidebar'
import DashboardProfile from '../componenets/DashboardProfile'
import DashPosts from '../componenets/DashPosts';
import DashUsers from '../componenets/DashUsers';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <div>
      <div>
         {/* sidebar */}
      <DashboardSidebar/>
      </div>
      {/* profile */}
      {tab === 'profile' && <DashboardProfile/>}
      {/* posts */}
      {tab === 'posts' && <DashPosts/>}
      {/* users */}
      {tab ==='users' && <DashUsers/>}
    </div>
  )
}
