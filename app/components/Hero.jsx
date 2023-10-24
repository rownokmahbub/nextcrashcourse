import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
<>
<div className="container mx-auto light-bg dark:dark-bg pt-20 mt-10 rounded-xl border-4 border-slate-100 dark:border-slate-500 dark:shadow-2xl">
  <div className="flex flex-col justify-center items-center md:h-[75vh]">
  <h1 className='text-6xl text-center uppercase font-bold'>Lets Build the <br /> next Gen website</h1>
  <p className='text-xl text-slate-400 dark:text-slate-400 text-center font-medium max-w-lg mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
  <Image className='max-w-4xl w-full' loading='lazy' object-fit='cover' height={100} width={100}  src="https://rm-protfolio.vercel.app/Assets/uiux/hero.svg" alt="image" />
  </div>
    
</div>
</>
  );
}

export default Hero