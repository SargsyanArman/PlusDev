import React from 'react'
import PostItem from './PostItem'

const Posts = () => {
  return (
    <div className='flex flex-wrap gap-6'>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
  )
}

export default Posts
