import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'

const SidebarLeftItem = ({ icon,text }) => {
    
    return (
        <div>
            <ul className='flex flex-col gap-6 pl-8'> {icon.map((item,index) => (
                    <li key={index+item} className='flex items-center h-14 w-[216px] p-[10px] rounded-lg text-[18px] cursor-pointer list-none first:bg-gradient-to-r from-[#eb2005] to-[#db5344] first:font-bold first:text-white hover:bg-[#E2E8F0]'>
                        {item} 
                        <p className='pl-4'>{text[index]}</p>
                    </li>
                 ))}
            </ul>
        </div>
    )
}



export default SidebarLeftItem
