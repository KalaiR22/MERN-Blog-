import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiUser, HiArrowSmRight } from 'react-icons/hi'; // Import icons
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { Link } from 'react-router-dom';

export default function DashboardSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');

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
            <SidebarItem active={tab === 'profile'} icon={HiUser} label={'Profile'} labelColor='dark'>
              Profile
            </SidebarItem>
          </Link>
          <SidebarItem icon={HiArrowSmRight}  className='cursor-pointer'>
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}

