import React from 'react'
import HeaderMainContent from './HeaderMainContent/HeaderMainContent'
import BodyMainContent from './BodyMainContent/BodyMainContent'

const MainContent = () => {
  return (
    <div className='flex flex-col gap-6 w-[913px] my-7 mx-6 overflow-y-auto max-h-[100vh-122px] scroll-main'>
        <HeaderMainContent />
        <BodyMainContent />
    </div>
  )
}

export default MainContent
