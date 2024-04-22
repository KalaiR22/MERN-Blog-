import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase'
import {signOutSuccess} from '../redux/user/userSlice';
import { Link } from 'react-router-dom';

export default function DashboardProfile() {
  const {currentUser} = useSelector(state => state.user)
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
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>profile</h1>
      <form className='flex flex-col gap-4'>
       
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img src={currentUser.profilePicture} alt="user" 
          className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
        </div>
        <TextInput type='text' placeholder='username' defaultValue={currentUser.username}/>
        <TextInput type='email' placeholder='email' defaultValue={currentUser.email}/>
        <TextInput type='password' id='password' placeholder='password' />
        <Button type='submit' gradientDuoTone="purpleToBlue" outline>Update</Button>
        {currentUser.isAdmin && (<Link to={'/createpost'}>
          <Button type='button'  gradientDuoTone='purpleToPink' className='w-full'>Createa Post</Button>
        </Link>)}
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer' onClick={handleSignout}>Sign Out</span>
      </div>
    </div>
  )
}
