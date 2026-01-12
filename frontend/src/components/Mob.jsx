import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSearch } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { SearchContext } from '../../context/SearchContext';



const CourseraNavBar = () => {
  const [exploreDrop,setExploreDrop] = useState(false)
  const [blackDrop,setBlackDrop] = useState(false)
  const [degreeDrop,setDegreeDrop] = useState(false)
  const [certificateDrop,setCertificateDrop] = useState(false)
  const [dataScienceDrop,setDataScienceDrop] = useState(false)
  const [businessDrop,setBusinessDrop] = useState(false)
  const [computerScienceDrop,setComputerScienceDrop] = useState(false)
  const [ictDrop,setIctDrop] = useState(false)
  const [languageDrop,setLanguageDrop] = useState(false)
  const [healthDrop,setHealthDrop] = useState(false)
  const [personalDrop,setPersonalDrop] = useState(false)
  const [physicalDrop,setPhysicalDrop] = useState(false)
  const [socialDrop,setSocialDrop] = useState(false)
  const [artDrop,setArtDrop] = useState(false)
  const [mathDrop,setMathDrop] = useState(false)

  const [hambugDrop,setHambugDrop] = useState(false)
  const [exploreMobDrop,setExploreMobDrop] = useState(false)
  const [degreeMobDrop,setDegreeMobDrop] = useState(false)
  const [certMobDrop,setCertMobDrop] = useState(false)
  const [dataMobDrop,setDataMobDrop] = useState(false)
  const [businessMobDrop,setBusinessMobDrop] = useState(false)
  const [compMobDrop,setCompMobDrop] = useState(false)
  const [infoMobDrop,setInfoMobDrop] = useState(false)
  const [langMobDrop,setLangMobDrop] = useState(false)
  const [healthMobDrop,setHealthMobDrop] = useState(false)
  const [personalMobDrop,setPersonalMobDrop] = useState(false)
  const [phyMobDrop,setPhyMobDrop] = useState(false)
  const [socMobDrop,setSocMobDrop] = useState(false)
  const [artMobDrop,setArtMobDrop] = useState(false)
  const [mathMobDrop,setMathMobDrop] = useState(false)




  return (
    <div className='py-5 lg:py-3 fixed w-[100vw] border bg-white  md:px-[3vw] lg:px-[4vw]'>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
          <img src={assets.courseraLogo} className='h-5 cursor-pointer hidden lg:flex' alt="" />

          {/* explore button */}
            <button 
            onMouseEnter={()=>{
              setExploreDrop(true)
              setBlackDrop(true)
            }} 
            className='text-blue-800 ml-2 font-semibold border hidden lg:flex items-center gap-2 border-blue-800 py-2 px-3 rounded'>Explore 
                <span><MdOutlineKeyboardArrowDown className='text-xl text-blue-500'/></span></button>

                {/* serach */}
                <div className=' w-full hidden lg:flex'>
                     <div className='flex justify-between pl-3 pr-1 border rounded-full w-[475px] py-1'>
                         <input type="text" placeholder='What do you want to learn?' className='border-none text-sm w-full text-black' />
                            <div className='bg-blue-800 p-2 rounded-full'>
                                <CiSearch className='text-white  text-xl cursor-pointer'/>
                            </div>

                     </div>

                 </div>
        </div>

        <div className='lg:flex hidden gap-3 items-center font-normal  text-slate-500 text-[14px]'>
            <p className='cursor-pointer hover:text-blue-800'>Online Degrees</p>
            <p className='cursor-pointer hover:text-blue-800'>Find your New Career</p>
            <p className='text-blue-800 font-normal cursor-pointer hover:underline'>Log In</p>
            <button className='text-blue-800 font-bold border border-blue-800 py-2 px-2 rounded hover:bg-blue-50 transition-all'>Join for Free</button>
        </div>
      </div>

       {/*---------------- black overlay------------------- */}
       <div 
       onMouseEnter={()=>{
        setDegreeDrop(false)
        setCertificateDrop(false)
        setDataScienceDrop(false)
        setBusinessDrop(false)
        setComputerScienceDrop(false)
        setIctDrop(false)
        setLanguageDrop(false)
        setHealthDrop(false)
        setPersonalDrop(false)
        setPhysicalDrop(false)
        setSocialDrop(false)
        setArtDrop(false)
        setMathDrop(false)
      }}
       className={`absolute right-0 top-[70px] left-0 w-[100vw] h-[100vw] bg-black  ${blackDrop ? 'opacity-75 visible' : 'opacity-0 invisible'}`}>
       </div>
     
        {/*----------------------explore dropdown--------------*/}
        <div onMouseLeave={()=>{
          setExploreDrop(false)
          setBlackDrop(false)
        }}
          className={` absolute pt-8 pb-28  top-[70px] left-[100px] bg-slate-100  w-[350px] h-[1000px] max-h-[100vh] overflow-y-scroll ${exploreDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          
          <div className='pb-20'>
              <div className='flex flex-col  pt-4 '>
                <p className='font-semibold text-xl pl-5 pb-1'>Goals</p>
                <p 
                onMouseEnter={()=>setDegreeDrop(false)} 
                className='text-slate-700 cursor-pointer px-5 hover:shadow-sm py-1  hover:text-blue-800  hover:bg-white'>Take a free course</p>
                <p onMouseEnter={()=>{
                  setDegreeDrop(true)
                  setCertificateDrop(false)


                } }
                className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>Earn a Degree <span className='hover:text-blue-800'><SlArrowRight className='text-[14px] hover:text-red-800'/></span></p>
                <p 
                onMouseEnter={()=>{
                  setDegreeDrop(false)
                  setCertificateDrop(true)
                }}
               
                 className='text-slate-700 flex items-center cursor-pointer  hover:text-blue-800 justify-between px-5 hover:shadow-sm py-1 hover:bg-white'>Earn a Certificate <span className='hover:text-blue-800'><SlArrowRight className='text-[14px]'/></span></p>
                <Link to='/' onMouseEnter={()=>
                setCertificateDrop(false)} 
                onClick={()=>{setExploreDrop(false)
                  setBlackDrop(false)
                }}
                className='text-slate-700 cursor-pointer px-5  hover:text-blue-800 hover:shadow-sm py-1 hover:bg-white'>Find your new career</Link>
              </div>
                
              <div className='flex flex-col  py-8'>
              <p 
              onMouseEnter={()=>{
                setCertificateDrop(false)
                setDataScienceDrop(false)
              }}
              className='font-semibold text-xl pl-5 pb-1'>Subjects</p>
             <p 
              onMouseEnter={()=>{
                setDegreeDrop(false)
                setCertificateDrop(false)
                setDataScienceDrop(true)
                setBusinessDrop(false)
              }}
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                 Data Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
             <p 
             onMouseEnter={()=>{
              setDataScienceDrop(false)
              setBusinessDrop(true)
              setComputerScienceDrop(false)
            }}
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Business<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(true)
                    setIctDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Computer Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(true)
                    setLanguageDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Information and Technology<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onMouseEnter={()=>{
                      setDataScienceDrop(false)
                      setBusinessDrop(false)
                      setComputerScienceDrop(false)
                      setIctDrop(false)
                      setLanguageDrop(true)
                      setHealthDrop(false)
                    }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Language Learning<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(true)
                    setPersonalDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Health<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onMouseEnter={()=>{
                      setDataScienceDrop(false)
                      setBusinessDrop(false)
                      setComputerScienceDrop(false)
                      setIctDrop(false)
                      setLanguageDrop(false)
                      setHealthDrop(false)
                      setPersonalDrop(true)
                      setPhysicalDrop(false)
                    }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Personal Development<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(true)
                    setSocialDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Physical Science and Engineering<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setArtDrop(false)
                    setSocialDrop(true)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Social Sciences<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setSocialDrop(false)
                    setArtDrop(true)
                    setMathDrop(false)
                  }}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Art and Humaniities<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p
                   onMouseEnter={()=>{
                    setDataScienceDrop(false)
                    setBusinessDrop(false)
                    setComputerScienceDrop(false)
                    setIctDrop(false)
                    setLanguageDrop(false)
                    setHealthDrop(false)
                    setPersonalDrop(false)
                    setPhysicalDrop(false)
                    setSocialDrop(false)
                    setArtDrop(false)
                    setMathDrop(true)
                   }} 
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Math and Logic<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  
            
              </div>

              <button className='py-1 px-2 border border-blue-800 ml-5 mb-10 rounded text-blue-800  font-medium cursor-pointer transition-all
               hover:bg-blue-800 hover:text-white'> Browse all subjects

              </button>
          </div>

        
        </div>

              {/* ---------------------------earn a degree drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
              }} 
              onMouseLeave={()=>setDegreeDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${degreeDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Earn a Degree</p>
                    <p className='text-slate-600 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
                  </div>

                 <div>
                 <div className='flex gap-8'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Data Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>



                        </div>

                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>
      </div>



                        </div>
                    </div>

                    {/* second session */}
                    <div className='flex gap-8 pt-20'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Computer Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of London</p>
              <p>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>West Virgina University</p>
              <p>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>



                        </div>

                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-12'>
        <div className='flex gap-28'>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
          </div>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
          </div>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all hover:text-white hover:bg-blue-800  border w-44 border-blue-800 py-2 px-4'>
          View all degrees
        </button>
        </div>

      
      


                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-16 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
            </div>
        
            {/* ---------------------------earn a certificate drop------------------- */}
            <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDegreeDrop(false)
              }} 
              onMouseLeave={()=>setCertificateDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${certificateDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Earn a Certificate</p>
                    <p className='text-slate-600 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>
                  </div>

                 <div>
                 <div className='flex gap-8'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Data Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Certificate</p>

      </div>



                        </div>
                        {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Project management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Project Management</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

           <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Digital Marketing & E-commerce</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>
          
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.intuit} className='w-8 border py-2 rounded ' alt="" />
            <div className='flex flex-col'>
            <p>Intuit Academy Bookkeeping</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Social Media Marketing</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>

            </div>
          </div>



          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Business Analyst</p>
            </div>
          </div>


         
          <p className='pt-5 text-blue-800 text-sm cursor-pointer'>View all Business Certificate</p>
      </div>



                        </div>
                    </div>

                    {/* second session */}
                    <div className='flex gap-8 pt-20'>
      {/* first row */}
        <div className=''>
            <div className='flex flex-col'>
              <p className=' font-bold'>Computer Science</p>
              <hr className='border-none h-[1px] w-[400px] bg-slate-400'/>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.deeplearning} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p>Generative AI for Software Development</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft IT Support Specialist</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8   rounded flex items-center '>
            <img src={assets.amazonLogo} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Amazon Junior Software Developer</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft UX design</p>
            </div>
          </div>

        
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.meta} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >Meta Front-End Developer</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Google Cybersecurity</p>
            </div>
          </div>

          <p className='pt-5 text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>
                        </div>
                      {/* second row */}
                        
        <div>
            <div className='flex flex-col'>
              <p className=' font-bold'>More Certificate Programs</p>
              <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-12'>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Launch your career</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Prepare for a certification</p>
          </div>
          <div className='flex flex-col gap-5 pt-6'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Advance your career</p>
          </div>
        </div>       
        </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>

              {/* ---------------------------data science drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(true)
                setBusinessDrop(false)
              }} 
              onMouseLeave={()=>setDataScienceDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${dataScienceDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Data Science</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>
            
               {/* ---------------------------business drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(false)
                setBusinessDrop(true)
                setComputerScienceDrop(false)
              }} 
              onMouseLeave={()=>setBusinessDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${businessDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Business</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* ---------------------------computer sciemce drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
               setIctDrop(false)
                setBusinessDrop(false)
                setComputerScienceDrop(true)
              }} 
              onMouseLeave={()=>setComputerScienceDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${computerScienceDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Computer Science</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
        <div className='pb-8'>
           
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Project management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Project Management</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

           <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Digital Marketing & E-commerce</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>
          
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.intuit} className='w-8 border py-2 rounded ' alt="" />
            <div className='flex flex-col'>
            <p>Intuit Academy Bookkeeping</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Social Media Marketing</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>

            </div>
          </div>



          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Business Analyst</p>
            </div>
          </div>
      </div>



                        </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

             {/* ---------------------------ict drop------------------- */}
             <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setLanguageDrop(false)
               setComputerScienceDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setIctDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${ictDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>  Information and Technology</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

              {/* --------------------------- Language Learning drop------------------- */}
              <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setHealthDrop(false)
               setIctDrop(false)
               setLanguageDrop(true)
              }} 
              onMouseLeave={()=>setLanguageDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${languageDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>   Language Learning</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.arizona} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Arizona State University TESOL </p>
              <p className='text-[12px] text-slate-700'>  Certification preparation•Self-paced</p>
            </div>
          </div>

         
         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

              {/* --------------------------- health drop------------------- */}
              <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setDataScienceDrop(false)
               setLanguageDrop(false)
               setPersonalDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setHealthDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${healthDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>   Health</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> Imperial College London </p>
              <p className='text-[12px] text-slate-700'>Postgraduate Certificate of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Imperial College London </p>
              <p className='text-[12px] text-slate-700'> Global Master of Public Health  </p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.michigan} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>University of Michigan </p>
              <p className='text-[12px] text-slate-700'>  Master of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 pb-8 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.ponti} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Pontificia Universidad Católica de Chile </p>
              <p className='text-[12px] text-slate-700'> Magíster en Salud Pública Global</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
          View all degrees
                  </button>





         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* ---------------------------   Personal Development drop------------------- */}
               <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setPhysicalDrop(false)
               setHealthDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setPersonalDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${personalDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>    Personal Development</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.nexus} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> CertNexus Certified Ethical Emerging Technologist</p>
              <p className='text-[12px] text-slate-700'>  Certification preparation •Self-paced</p>
            </div>
          </div>

         
         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

             {/* --------------------------- Physical Science and Engineering------------------- */}
             <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setSocialDrop(false)
                setPersonalDrop(false)
              }} 
              onMouseLeave={()=>setPhysicalDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${physicalDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>Physical Science and Engineering</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Huddersfield</p>
              <p>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>O.P. jindal Global University</p>
              <p>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>GeorgeTown University</p>
              <p>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer pb-16'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Colorado Boulder</p>
              <p>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>
      </div>



                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p >Google Data Analytics</p>
              <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.google} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Google Advanced Data Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.ibm} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
            <p >IBM Data Science</p>
            <p className='text-[12px] text-slate-700'>No prerequisites. Self-Paced</p>  
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* --------------------------- Social Sciences drop------------------- */}
               <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setDataScienceDrop(true)
                setPhysicalDrop(false)
                setArtDrop(false)
              }} 
              onMouseLeave={()=>setSocialDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${socialDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Social Sciences</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Louisiana State University</p>
              <p>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Illinois Tech</p>
              <p>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
      <button className='cursor-pointer transition-all w-440 px-4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all degrees
                  </button>


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.deeplearning} className='h-8 rounded' alt="" />
            <div className='flex'>
              <p>DeepLearning.AI Data Engineering</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.meta} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p>Meta Data Analyst</p>
            </div>
          </div>

      </div>
      <button className='cursor-pointer transition-all w-44 px-2 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all certifications
                  </button>


                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>
            
              {/* ------------------------- Art and Humaniities drop------------------- */}
              <div onMouseEnter={()=>{
                setExploreDrop(true)
                setBlackDrop(true)
                setSocialDrop(true)
                setBusinessDrop(false)
                setMathDrop(false)
              }} 
              onMouseLeave={()=>setArtDrop(true)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${artDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'> Art and Humaniities</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className=' w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Degrees</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2 pb-8'>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Michigan</p>
              <p>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[12px] text-slate-700'>University of Illinois Urban-Champaign</p>
              <p>Master of Computer Science in Data Science</p>
            </div>
          </div>


      </div>
     


                        </div>

                        {/* second row */}
                        
                        <div className='w-[20vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Certificate programs</p>
              <hr className='border-none h-[1px] w-full bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>In 3-9 months, gain the skills to break into a new career or take your career to the next level.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-4 pb-8'>
        
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.microsoft} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
             
              <p>Microsoft Power BI Data Analyst</p>
            </div>
          </div>


      </div>
                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[12vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

               {/* --------------------------- Math and Logic------------------ */}
               <div onMouseEnter={()=>{
               setExploreDrop(true)
               setBlackDrop(true)
               setArtDrop(false)
               setIctDrop(true)
              }} 
              onMouseLeave={()=>setMathDrop(false)} 
              className={`absolute top-[70px] px-6 left-[450px] bg-white w-[950px] pb-28 h-[1000px] max-h-[100vh] overflow-y-scroll ${mathDrop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <div className=''>
                  {/* title */}
                  <div className='flex pt-8 flex-col pb-8'>
                    <p className=' font-bold text-2xl'>    Math and Logic</p>
                  </div>

                 <div>
                 <div className='flex gap-10 '>
                     {/* first row */}
                     <div className='w-[50vw]'>
            <div className='flex flex-col'>
              <p className=' font-bold'>Business</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
              <p className='text-slate-600 pt-6 text-[12px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>

            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p> Imperial College London </p>
              <p className='text-[12px] text-slate-700'>Postgraduate Certificate of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.imperial} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Imperial College London </p>
              <p className='text-[12px] text-slate-700'> Global Master of Public Health  </p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.michigan} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>University of Michigan </p>
              <p className='text-[12px] text-slate-700'>  Master of Public Health</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 pb-8 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.ponti} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
            <p>Pontificia Universidad Católica de Chile </p>
              <p className='text-[12px] text-slate-700'> Magíster en Salud Pública Global</p>
            </div>
          </div>

         
          <button className='cursor-pointer transition-all w-[150px] text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
          View all degrees
                  </button>





         
      </div>

                        </div>

                           {/* third session */}
                        <div className='flex flex-col w-[50vw]'>
                           <div className='flex flex-col'>
                     <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Get started</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>
                     <div className='flex flex-col pt-8 gap-4'>
                      <p className='cursor-pointer'>New Data Science Courses</p>
                      <p className='cursor-pointer'>Beginner Data Science Courses</p>
                      <p className='cursor-pointer'>Advance Data Science Courses</p>
                      <p className='cursor-pointer'>Data Science</p>
                     </div>
                    </div>

                    <div className='flex flex-col pt-12'>
                  <div className='flex flex-col w-full'>
                        <p className=' font-bold'>Popular skills</p>
                        <hr className='border-none w-full  h-[1px] bg-slate-400'/>
                      </div>

                     <div className='flex flex-col pt-8 gap-4 pb-8'>
                      <p className='cursor-pointer'>Artificial Inteligence</p>
                      <p className='cursor-pointer'>Data Analysis</p>
                      <p className='cursor-pointer'>Data Science</p>
                      <p className='cursor-pointer'>Machine Learning</p>
                      <p className='cursor-pointer'>Microsoft Excell</p>
                      <p className='cursor-pointer'>Power BI</p>
                      <p className='cursor-pointer'>Python</p>
                      <p className='cursor-pointer'>R Programming</p>
                      <p className='cursor-pointer'>SQL</p>
                      <p className='cursor-pointer'>Statistics</p>
                     </div>
                  </div>

                  <button className='cursor-pointer transition-all w-3/4 text-blue-800 hover:bg-blue-800 hover:text-white border border-blue-800 py-1'>
                    View all skills
                  </button>

                           </div>
                  


                    </div>

                  

                   
                 </div>
               </div>
            </div>

            {/* --------------------tab an mobile version------------- */}
            <div className='flex lg:hidden w-full items-center px-6 justify-between'>
      <div className='flex gap-14 items-center justify-center'>
      <GiHamburgerMenu onClick={() => setHambugDrop(!hambugDrop)} className='lg:hidden flex text-2xl cursor-pointer' />

        <img src={assets.courseraLogo} className='h-4' alt="" />
      </div>
      <div className='flex'>
        <MdOutlineSearch className='text-slate-500  text-2xl cursor-pointer'/>
      </div>
    </div> 
    

       {/* hamburger menu */}
      <div className={`bg-blue-50 left-0 top-0 mb-16 bottom-0 h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${hambugDrop ? 'w-[100vw]' : 'w-0'}`}>

        {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>

        {/* Menu Items */}
        <div className='px-6 pt-4 font-normal'>
          {/* These items should stack vertically */}
          <div className='flex flex-col  justify-center'>
            <p 
            onClick={()=>setExploreMobDrop(true)}
            className='flex justify-between cursor-pointer items-center'>Explore <span><SlArrowRight className='text-sm'/></span></p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

          <div className='flex flex-col gap-2 mt-3'>
            <p>For Businesses</p>
            <p>For Government</p>
            <p>For Universities</p>
          </div>

          <div className='mt-2 flex flex-col gap-2'>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-2' />
            <p>Get our app</p>
          </div>
        </div>
            <div className='bottom-0 absolute bg-blue-100 shadow-2xl  w-full h-36'>
              <div className='flex flex-col gap-3 items-center my-4'>
              <button className='bg-blue-800 text-white py-3 rounded  mx-4  w-[90vw] px'>Join for Free </button>
            <button className='bg-inherit border border-blue-800 text-blue-800 py-3 rounded  mx-4  w-[90vw] px'>Log In </button>

              </div>
          
            </div>


      </div>

       {/* explore menu */}
       <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold 
       overflow-hidden transition-transform duration-300 
          ${exploreMobDrop ? 'w-[100vw]' : 'w-0'}`}>

        {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 
            onClick={() => {
              setExploreMobDrop(false)
              setHambugDrop(false)
              }} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>

        {/* Menu Items */}
        <div className='bg-slate-100 font-normal h-full pb-60 max-h-[100vh] overflow-y-scroll'>
          {/* These items should stack vertically */}
          <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setExploreMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Main Menu </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

          <div className='flex bg-slate-50 flex-col gap-2 pt-3'>
            <div className='flex flex-col  pt-4 '>
                <p className='font-semibold text-[14px] pl-3 pb-1'>Goals</p>
                <p 
                
                className='text-slate-700 cursor-pointer px-5 hover:shadow-sm py-1  hover:text-blue-800  hover:bg-white'>
                  Take a free course</p>
                <p 
                onClick={()=>setDegreeMobDrop(true)}
                className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Earn a Degree <span className='hover:text-blue-800'><SlArrowRight className='text-[14px] hover:text-red-800'/></span></p>
                <p 
                onClick={()=>setCertMobDrop(true)}
                 className='text-slate-700 flex items-center cursor-pointer  hover:text-blue-800 justify-between px-5 hover:shadow-sm py-1 hover:bg-white'>
                  Earn a Certificate <span className='hover:text-blue-800'><SlArrowRight className='text-[14px]'/></span></p>
                <Link to='/' 
                
                className='text-slate-700 cursor-pointer px-5  hover:text-blue-800 hover:shadow-sm py-1 hover:bg-white'>
                  Find your new career</Link>
              </div>
          </div>

          <div className='flex flex-col  py-5 bg-slate-50'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />

              <p 
            
              className='font-semibold text-[14px] pl-3 pb-1'>Subjects</p>
             <p 
              onClick={()=>setDataMobDrop(true)}
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                 Data Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
             <p 
              onClick={()=>setBusinessMobDrop(true)}
             
             className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Business<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
              onClick={()=>setCompMobDrop(true)}
                   
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Computer Science<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onClick={()=>setInfoMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Information and Technology<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onClick={()=>setLangMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Language Learning<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onClick={()=>setHealthMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Health<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                    onClick={()=>setPersonalMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Personal Development<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onClick={()=>setPhyMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Physical Science and Engineering<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onClick={()=>setSocMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Social Sciences<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p 
                   onClick={()=>setArtMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Art and Humaniities<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  <p
                   onClick={()=>setMathMobDrop(true)}
                  className='text-slate-700 px-5 hover:shadow-sm py-1 hover:bg-white  hover:text-blue-800 flex items-center cursor-pointer justify-between'>
                  Math and Logic<span className='hover:text-blue-800'><SlArrowRight className='text-[14px] '/></span></p>
                  
            
              </div>

              <div className='bottom-0 absolute bg-blue-100 shadow-2xl  w-full h-36'>
              <div className='flex flex-col gap-3 items-center my-4'>
              <button className='bg-blue-800 text-white py-3 rounded  mx-4  w-[90vw] px'>Join for Free </button>
            <button className='bg-inherit border border-blue-800 text-blue-800 py-3 rounded  mx-4  w-[90vw] px'>Log In </button>

              </div>
          
            </div>
        </div>
      </div>

 {/* ---------------------------earn a degree mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${degreeMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => {setHambugDrop(false)
            setExploreMobDrop(false)
              setDegreeMobDrop(false)
            }} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setDegreeMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Earn a Degree</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------earn a certificate mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${certMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setCertMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Earn a Certificate</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

               {/* ---------------------------data science mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${dataMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setDataMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Data Science</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------Business mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${businessMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setBusinessMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Business</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------comp science mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${compMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setCompMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Computer Science</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------info mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${infoMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setInfoMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Information and Technology</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------language mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${langMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setLangMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Language Learning</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

  {/* ---------------------------health mob drop------------------- */}
  <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${healthMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setHealthMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Health</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

             {/* ---------------------------personal mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${personalMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setPersonalMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Personal Development</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

            {/* ---------------------------Physical Science mob drop------------------- */}
  <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${phyMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setPhyMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Physical Science and Engineering</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

            {/* ---------------------------social science mob drop------------------- */}
 <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${socMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setSocMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Social Science</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

            {/* ---------------------------art mob drop------------------- */}
  <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${artMobDrop ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setArtMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Art and Hamanities</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>

            
            {/* ---------------------------math mob drop------------------- */}
  <div className={`bg-slate-50 left-0 top-0 mb-16 bottom-0 h-[100vh] max-h-[100vh] absolute font-semibold overflow-hidden transition-transform duration-300 
          ${mathMobDrop  ? 'w-[100vw]' : 'w-[0vw]'}`}>

            {/* logo and cross */}
        <div>
          <div className='flex items-center justify-center pt-6'>
            <img src={assets.courseraLogo} className='h-4 ' alt="" />
          </div>
          <div>
            <RxCross1 onClick={() => setHambugDrop(false)} className='text-2xl cursor-pointer absolute right-3 top-5' />
          </div>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-5' />
        </div>
        {/* earn a degree */}
        <div className='overflow-y-scroll max-h-[100vh]'>
        <div className='flex flex-col text-[14px]  justify-center'>
          <hr className='border-none w-full h-[0.5px] mb-3 bg-gray-300' />
            <p 
            onClick={()=>setMathMobDrop(false)}
            className='flex gap-2 px-2 cursor-pointer items-center'><span>
              <SlArrowRight className='text-sm rotate-180'/></span>Explore </p>
          <hr className='border-none w-full h-[0.5px] bg-gray-300 mt-3' />
          </div>

                <div className=''>
                  {/* title */}
                  <div className='flex pl-6 pr-5 gap-3 pt-8 flex-col pb-8'>
                    <p className=' font-bold text-[18px]'>Art and Hamanities</p>
                    <p className='text-slate-600 pb-6  text-[11px]'>Breakthrough pricing on 100% online degrees designed to fit into your life.</p>
              <hr className='border-none h-[0.5px] w-[90vw] bg-slate-400'/>
                 
                  </div>

                 <div>
                 <div className='flex-col gap-8'>
      {/* first row */}
        <div className='pl-6'>
            <div className='flex flex-col pb-4'>
              <p className=' font-bold'>Data Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
       
         
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.illinois} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Illinois Tech</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>


          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8  rounded flex items-center'>
            <img src={assets.indian} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Indian Institute of Technology Guwahati</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Data Science & AI</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='font-normal text-[10px] text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>
          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.michigan} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>Master of Applied Data Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-3 font-normal text-blue-800 text-sm cursor-pointer'>View all Business Degrees</p>

      </div>
                        </div>

                        {/* second row */}
                        
        <div className='mt-6 px-6'>
            <div className='flex flex-col'>
            <hr className='border-none w-[400px]  h-[1px] bg-slate-400'/>

              <p className='pt-6 font-bold'>Business</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
         <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Business Administration (iMBA)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.huddersfield} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Huddersfield</p>
              <p className='font-medium text-[12px]'>MSc Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.jindal} className='w-8 border py-1 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>O.P. jindal Global University</p>
              <p className='font-medium text-[12px]'>MBA in Business Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.illinoistech} className='h-8 rounded ' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Science in Management (iMSM)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.george} className='w-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>GeorgeTown University</p>
              <p className='font-medium text-[12px]'>Bachelor of Arts in Liberal Studies</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3 cursor-pointer'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

         
          <p className='pt-5 text-blue-800 font-normal text-sm cursor-pointer'>View all Business Degrees</p>
      </div>
                        </div>
                    </div>

                    {/* third session */}
                    <div className='flex flex-col mx-6 gap-8 pt-6'>
      {/* third row */}
        <div className=''>
            <div className='flex flex-col'>
            <hr className='border-none h-[0.5px] w-[400px] bg-slate-400'/>
              <p className='pt-6 font-bold'>Computer Science</p>
            </div>
        {/* image of institutions */}
       <div className='flex flex-col gap-2'>
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.london} className='h-8 rounded border' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of London</p>
              <p className='font-medium text-[12px]'>Bachelor of Science in Computer Science</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.lsu} className='h-8 rounded ' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>Louisiana State University</p>
              <p className='font-medium text-[12px]'>Master of Science in Analytics</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div  className='border w-8 h-8  rounded flex items-center '>
            <img src={assets.wes} className='h-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>West Virgina University</p>
              <p className='font-medium text-[12px]'>Master of Data Science</p>
            </div>
          </div>

      
          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.colorado} className='h-8 border  rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Colorado Boulder</p>
              <p className='font-medium text-[12px]'>Master of Engineering in Engineering Management</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <div className='border w-8 h-8 pt-2 rounded'>
            <img src={assets.leeds} className='w-8 rounded' alt="" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Michigan</p>
              <p className='font-medium text-[12px]'>MSc Data Science (Statistics)</p>
            </div>
          </div>

          <div className='flex pt-3 items-center gap-3'>
            <img src={assets.illinoistech} className='h-8 rounded' alt="" />
            <div className='flex flex-col'>
              <p className='text-[10px] font-normal text-slate-700'>University of Illinois Urban-Champaign</p>
              <p className='font-medium text-[12px]'>Master of Computer Science in Data Science</p>
            </div>
          </div>

          <p className='pt-5 font-normal text-blue-800 text-sm'>View all Computer Science Degrees</p>

      </div>

                        </div>
                        {/* second row */}
                        
        <div className='flex flex-col'>
            <div className='flex flex-col '>
              <p className=' font-bold text-[12px]'>More Degrees</p>
              <hr className='border-none w-[400px]  h-[1px] '/>
            </div>
        {/* text */}
        <div className='flex flex-col gap-6'>
        <div className='flex flex-col text-[12px] gap-6 pt-3'>
            <p className='text-blue-800 hover:underline cursor-pointer'>Public Health</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Engineering</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Bachelor's Degrees</p>
            <p className='text-blue-800 hover:underline cursor-pointer'>Master's Degrees</p>
        </div>

        <button className='text-blue-800 cursor-pointer transition-all text-[14px] hover:text-white hover:bg-blue-800 
         border w-32 border-blue-800 py-2 px-2'>
          View all degrees
        </button>
        </div>

                        </div>
                    </div>

                      {/* third session */}
        <div className='flex pt-8 mx-6 pb-28 w-full flex-col'>
        <div className='flex flex-col w-full'>
              <p className=' font-bold'>Earn credit toward a master's</p>
              <hr className='border-none w-full  h-[1px] bg-slate-400'/>
            </div>
            <p className='pt-5 font-normal text-blue-800 text-sm'>View all MasterTrack Certificates</p>
        </div>
                 </div>
               </div>
        </div>
       
            </div>



 
         
            
    </div>
  )
}

export default CourseraNavBar