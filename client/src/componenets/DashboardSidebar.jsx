import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiUser, HiArrowSmRight, HiDocumentText } from 'react-icons/hi'; // Import icons
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice';
import { Link } from 'react-router-dom';


export default function DashboardSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser)
  const [tab, setTab] = useState('');
   const handleSignout = async() =>{
    try{
      const res = await fetch('/api/user/signout',{
        method:'POST',
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }else{
         dispatch(signOutSuccess());
      }
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar>
      <SidebarItems>
        <SidebarItemGroup>
          <Link to='/dashboard?tab=profile'>
            <SidebarItem active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor='dark'>
              Profile
            </SidebarItem>
          </Link>
          {
            currentUser.isAdmin && (
               <Link to='/dashboard?tab=posts'>
            <SidebarItem active={tab === 'posts'} icon={HiDocumentText} >
              Posts
            </SidebarItem>
          </Link>
            )
            
          }
          <SidebarItem icon={HiArrowSmRight}  className='cursor-pointer' onClick={handleSignout}>
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}

