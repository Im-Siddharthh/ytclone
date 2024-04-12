import React from 'react';
import {useSelector} from "react-redux";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandYoutubeKids } from "react-icons/tb";

const sidebarItem1 = [
    {
        icons:<MdHomeFilled size="24px"/>,
        title:"Home",
        id:"01"
    },
    {
        icons:<SiYoutubeshorts size="24px"/>,
        title:"Short",
        id:"02"
    },
    {
        icons:<MdOutlineSubscriptions size="24px"/>,
        title:"Subscriptions",
        id:"03"
    }
]
const sidebarItem2 = [
    {
        icons:<CgProfile size="22px"/>,
        title:"Your Channel",
        id:"01"
    },
    {
        icons:<GoHistory size="22px"/>,
        title:"History",
        id:"02"
    },
    {
        icons:<GoVideo size="22px"/>,
        title:"Your Videos",
        id:"03"
    },
    {
        icons:<MdOutlineWatchLater size="22px"/>,
        title:"Watch Later",
        id:"04"
    },
    {
        icons:<MdOutlineFileDownload size="22px"/>,
        title:"Downloads",
        id:"05"
    },
    {
        icons:<FaChevronDown size="20px"/>,
        title:"Show More",
        id:"06"
    }
]
const sidebarItem3 = [
    {
        icons:<FaHotjar size="22px"/>,
        title:"Trending",
        id:"01"
    },
    {
        icons:<MdOutlineShoppingBag size="22px"/>,
        title:"Shopping",
        id:"02"
    },
    {
        icons:<IoMdMusicalNote size="22px"/>,
        title:"Music",
        id:"03"
    },
    {
        icons:<MdLocalMovies size="22px"/>,
        title:"Movies",
        id:"04"
    },
    {
        icons:<MdOutlineFileDownload size="22px"/>,
        title:"Live",
        id:"05"
    },
    {
        icons:<FaGamepad size="22px"/>,
        title:"Gaming",
        id:"06"
    },
    {
        icons:<IoNewspaperOutline size="22px"/>,
        title:"News",
        id:"07"
    }

]
const sidebarItem4 = [
    {
        icons:<TbBrandYoutube size="22px"/>,
        title:"Youtube Premium",
        id:"01"
    },
    {
        icons:<SiYoutubemusic size="22px"/>,
        title:"Youtube Mousic",
        id:"02"
    },
    {
        icons:<SiYoutubestudio size="22px"/>,
        title:"Youtube Studio",
        id:"03"
    },
    {
        icons:<TbBrandYoutubeKids size="22px"/>,
        title:"Youtube Kids",
        id:"04"
    }
]


const Sidebar = () => { 
    const open = useSelector((store)=>store.app.open);
    return (
        <>
        <div className={`relative top-15 left-0 ${open? "w-[16%]" : "w-[12%]"} p-5 ] h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`} >
            {
                sidebarItem1.map((item, index) => {
                    return (
                        <div key={item.id} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        <hr className='my-5'></hr>
        <div className='flex my-4 '>
            <h2 className='font-semibold'>You</h2>
            <p className='ml-4 text-xl'>{">"}</p>
        </div>

        {
                sidebarItem2.map((item, index) => {
                    return (
                        <div key={item.id} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }

          <hr className='my-5'></hr>
        <div className='flex my-4 '>
            <h2 className='font-semibold'>Explore</h2>
        </div>
        {
                sidebarItem3.map((item, index) => {
                    return (
                        <div key={item.id} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
              <hr className='my-5'></hr>

<div className='flex my-4 '>
    <h2 className='font-semibold'>More From Youtube</h2>
</div>

{
                sidebarItem4.map((item, index) => {
                    return (
                        <div key={item.id} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }



<hr className='my-5'></hr>   
        </div>
        </>
    )
}

export default Sidebar