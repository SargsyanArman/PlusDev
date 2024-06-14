import React from 'react'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import HeaderButtons from './HeaderButtons/HeaderButtons'


const HeaderMainContent = () => {
  return (
    <div className='flex justify-between w-[903px] h-[166px]'>
      <HeaderInfo />
      <HeaderButtons />
    </div>
  )
}

export default HeaderMainContent

