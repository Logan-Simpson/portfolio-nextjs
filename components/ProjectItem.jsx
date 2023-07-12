import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#31708e] rounded-xl p-4 group bg-[#687864] bg-opacity-90 hover:bg-gradient-to-r from-[#31708e] to-[#8fc1e3]">
    <Image className="rounded-xl group-hover:opacity-30" src={backgroundImg} alt="/"/>
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#f7f9fb] tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-[#f7f9fb] text-center">HTML</p>
        <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-[#f7f9fb] text-[#31708e] font-bold text-lg cursor-pointer">More Info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem;