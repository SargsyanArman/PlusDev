import React from 'react'
import SidebarPostItem from './SidebarPostItem'
import TopQuestions from './TopQuestions'
import PopularTags from './PopularTags'

const icons = [
    <i className="fa-solid fa-arrow-right-long sidebar-right-btnRight"></i>,
    <i className="fa-solid fa-arrow-right-long sidebar-right-btnRight"></i>,
    <i className="fa-solid fa-arrow-right-long sidebar-right-btnRight"></i>,
    <i className="fa-solid fa-arrow-right-long sidebar-right-btnRight"></i>
]

const SidebarR = () => {
  return (
    <div className='w-[319px] mt-14 overflow-y-auto sidebar-right'>
        <h2 className='text-[20px] font-bold text-zinc-900'>Top Posts</h2>
        <SidebarPostItem icons={icons} />
        <TopQuestions />
        <PopularTags />
    </div>
  )
}

export default SidebarR

//   width: 319px;
  // margin-top: 56px;
  // overflow-y: auto;