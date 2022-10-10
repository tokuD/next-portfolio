import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  img: StaticImageData,
  title: string,
  skill: string,
  projectUrl: string
}

const ProjectItem = (props: Props) => {
  return (
    <div
      className="relative flex items-center justify-center
                          h-auto w-full shadow-xl shadow-gray-400
                          rounded-xl p-4 group hover:bg-gradient-to-r
                          from-[#5651e5] to-[#709dff]"
    >
      <Image
        src={props.img}
        className="rounded-xl group-hover:opacity-10"
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-2xl text-white tracking-wider">{props.title}</h3>
        <p className="pb-4 pt-2 text-white">{props.skill}</p>
        <Link href={props.projectUrl}>
          <p className="py-3 rounded-lg bg-white hover:scale-105 duration-200 text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem