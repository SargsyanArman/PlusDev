import React from 'react'
import content from '../../../../../images/content.webp';
import PostButtons from './PostButtons';
import PostInfo from './PostInfo';

const PostItem = () => {
    return (
        <div className='w-[415px] h-[500px] bg-[#f4f4f5]'>
            <img src={content} alt="Image Content" className='w-[415px] h-[250px] px-3 mt-9 rounded-2xl hover:scale-[1.03] origin-center2x cursor-pointer' />
            <h3 className="font-bold text-xl ml-3 mt-3 cursor-pointer hover:text-ef4444"> Mastering Smart Contract Development <br /> with Node.js: Tools, Security, and Best...</h3>
            <PostButtons />
            <PostInfo />
        </div>
    )
}

export default PostItem
