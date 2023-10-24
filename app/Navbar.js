"use client";
import {Button,Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/react";
import {HiMenuAlt3} from 'react-icons/hi'
import Switch from "./components/Theme/Switch";
import {IoIosArrowDown} from 'react-icons/io'
import SignInModel from "./components/model/SignInModal";
import Image from "next/image";
import EnrollModal from "./components/model/EnrollModal";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
export default function App() {
  const items = [
    {
      href:'/file',
      label: "New file",
    },
    {
      href:'/about',
      label: "Copy link",
    },
    {
      href:'/edit',
      label: "Edit file",
    }
  ];

  const navlinks=[
    {
      label:'Home',
      href:'/',
    },
    {
      label:'About',
      href:'/about',
    },
    {
      label:'Contact',
      href:'/contact',
     
    },
    {
      label:'Gallery',
      href:'/gallery',
      
    },

  ]
  const pathname = usePathname();
  const [open,setOpen]= useState(false)
  const handleChange =()=>{
    setOpen(!open)
  }
  return (
    <>
      <div className="bg-white/80 z-50 dark:bg-slate-900/80 backdrop-blur-xl py-3 w-full sticky top-0 ">
      {/* desktop navbar */}
 
        <nav className="container mx-auto lg:flex hidden justify-between items-center ">
          <div className="flex items-center gap-2">
          <Link href='/'>
          <Image
              className=" w-16 h-16"
              loading="lazy"
              object-fit="cover"
              height={100}
              width={100}
              src="/darklogo.png"
              alt="image"
            />
          </Link>
           <Link href='/'>
           <p className="font-bold text-xl text-inherit">BigganPathShala</p>
           </Link>
          </div>
          <div className="flex items-center gap-5">
          {
            navlinks.map((link,i)=>{
              return(
                <Link key={i} className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''} color="foreground" href={link.href}>
             {link.label}
            </Link>
            
              )
            })
          }
          <Dropdown>
      <DropdownTrigger>
        <Button className='text-md' 
          variant="none" 
        >
          Open Menu
          <IoIosArrowDown className="text-lg font-semibold"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          
          <DropdownItem
            key={item.label}
            className={pathname=== `${item.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg w-full shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''}
            
          >
           <Link  color="foreground" href={item.href}>
             {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
          
          <Switch />
          <EnrollModal />
          <SignInModel />
          </div>
        </nav>
        {/* mobile navbar */}
        <nav className="container mx-auto flex flex-col lg:hidden px-4">
          <div className="flex items-center  justify-between">
          <Link href='/'>
          <Image
              className=" w-16 h-16"
              loading="lazy"
              object-fit="cover"
              height={100}
              width={100}
              src="/darklogo.png"
              alt="image"
            />
          </Link>
           <Link href='/'>
           <p className="font-bold text-xl text-inherit">BigganPathShala</p>
           </Link>
           
            <Button className="bg-primary-50 dark:bg-slate-800" onClick={handleChange}>
        <HiMenuAlt3 className="text-xl"/>
      </Button>
    
          </div>
          {open &&   <div className="flex flex-col items-center gap-5">
          {
            navlinks.map((link,i)=>{
              return(
                <Link key={i} className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''} color="foreground" href={link.href}>
             {link.label}
            </Link>
              )
            })
          }
       
          <Dropdown>
      <DropdownTrigger>
        <Button className='text-md' 
          variant="none" 
        >
          Open Menu
          <IoIosArrowDown className="text-lg font-semibold"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          
          <DropdownItem
            key={item.label}
            className={pathname=== `${item.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg w-full shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''}
            
          >
           <Link  color="foreground" href={item.href}>
             {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
          
          <Switch />
          <EnrollModal />
          <SignInModel />
          </div>}
        
        </nav>
      </div>
     
    </>
  );
}
