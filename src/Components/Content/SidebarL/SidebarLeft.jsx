import React from 'react'
import SidebarLeftItem from './SidebarLeftItem'
const SidebarLeft = ({ icon, text }) => {
    return (
        <div className='sidebar flex flex-col gap-5 text-[#18181b] pt-14 w-[266px] h-full overflow-y-auto'>
            <SidebarLeftItem icon={icon} text={text} />
            <div className='flex flex-col gap-5 w-full pl-8 mt-5'>
                <button className='btn-1 bg-ef4444 hover:bg-[#dc2626] cursor-pointer'>Login</button>
                <button className='btn-1 bg-[#6366f1] hover:bg-[#4f46e5] cursor-pointer'>Sign up</button>
                <hr className='w-[94%]' />
            </div>

            <div id="sidebar-footer">
                <div className="flex flex-row justify-center mb-[10px]">
                    <button className="btn-2">About us</button>
                    <button className="btn-2">Advertise</button>
                </div>
                <p className='w-[214px] h-[32px] text-[12px] pl-[34px]'>© 2024 <a href="#" className='text-ef4444'>PlusDev.NET.</a> All rights reserved.</p>
            </div>

        </div>
    )
}

export default SidebarLeft
