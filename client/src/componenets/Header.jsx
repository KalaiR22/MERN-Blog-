import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, TextInput, Button, NavbarToggle, NavbarCollapse, NavbarLink, Dropdown, Avatar, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-react';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import {useSelector, useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
import { signOutSuccess } from '../redux/user/userSlice';

export default function Header() {
 const path = useLocation().pathname;
 const {currentUser} = useSelector(state => state.user)
 const {theme} =useSelector((state)=> state.theme);
 const dispatch = useDispatch()

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

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >alaiv's</span>
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
         {theme ==='light' ? <FaSun/> : <FaMoon/>} 
        </Button>
        {currentUser ? (
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
            alt='user'
            img={currentUser.profilePicture}
            rounded/>
          }>
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
            <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider/>
            <DropdownItem onClick={handleSignout}>Sign out</DropdownItem>
          </Dropdown>
        ):(
          <Link to='/sign-in'>
          <Button gradientDuoTone="purpleToBlue" >
            Sign In
          </Button>
        </Link>
        )}
        
        <NavbarToggle/>
        
      </div>
      
        <NavbarCollapse>
          <NavbarLink active={path==='/'} >
            <Link to='/'>Home</Link>
          </NavbarLink>
          <NavbarLink active={path==='/about'}  >
            <Link to='/about'>About</Link>
          </NavbarLink>
          <NavbarLink active={path==='/projects'}  >
            <Link to='/projects'>Projects</Link>
          </NavbarLink>
        </NavbarCollapse>

    </Navbar>
  );
}
