import React from 'react'

const HeaderButtons = () => {
  return (
    <div className='flex flex-col items-end gap-3'>
      <div className='flex mb-12'>
        <button className='main-header-btns bg-ef4444 hover:bg-[#dc2626]'>Create a post</button>
        <button className='main-header-btns bg-[#6366f1] hover:bg-[#4f46e5]'>Ask a question</button>
      </div>
      <button className='main-header-btns font-semibold !text-[#ef4444] !text-base !w-[200px]'> VIEW ALL POSTS <i className="fa-solid fa-right-long right"></i></button>
    </div>
  )
}

export default HeaderButtons
