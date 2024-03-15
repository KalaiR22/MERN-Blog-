import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
       <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >alaiv's</span>
                Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-6'>
            <div>
            <FooterTitle title='ABOUT'/>
            <FooterLinkGroup col>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Github 
              </FooterLink>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Alaiv's Blog
              </FooterLink>
            </FooterLinkGroup>
            </div>
            <div>
            <FooterTitle title='FOLLOW US'/>
            <FooterLinkGroup col>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Github 
              </FooterLink>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Discord
              </FooterLink>
            </FooterLinkGroup>
            </div>
            <div>
            <FooterTitle title='LEGAL'/>
            <FooterLinkGroup col>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Privacy Policy 
              </FooterLink>
              <FooterLink 
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Terms & Conditions
              </FooterLink>
            </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'> 
           <FooterCopyright 
           href='#'
           by="Alaiv's Blog"
           year={new Date().getFullYear()}
           />
           <div className='flex gap-6 sm:mt-0  mt-4 sm:justify-center'>
          <FooterIcon href='#' icon={BsFacebook}/>
          <FooterIcon href='#' icon={BsGithub}/>
          <FooterIcon href='#' icon={BsDribbble}/>
          <FooterIcon href='#' icon={BsInstagram}/>
          <FooterIcon href='#' icon={BsTwitter}/>
           </div>
        </div>
       </div>
    </Footer>
  )
}
