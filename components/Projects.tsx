import Image from "next/image"
import Link from "next/link"
import React from "react"
import propertyImg from "../public/assets/projects/property.jpg"
import netflix from "../public/assets/projects/netflix.jpg"
import crypto from "../public/assets/projects/crypto.jpg"
import twitch from "../public/assets/projects/twitch.jpg"
import ProjectItem from "./ProjectItem"

type Props = {}

const Projects = (props: Props) => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projcets
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            img={propertyImg}
            title="Property Finder"
            skill="React JS"
            projectUrl="/property"
          />
          <ProjectItem
            img={crypto}
            title="Crypto App"
            skill="React JS"
            projectUrl="/crypto"
          />
          <ProjectItem
            img={netflix}
            title="Netflix App"
            skill="React JS"
            projectUrl="/netflix"
          />
          <ProjectItem
            img={twitch}
            title="Twitch App"
            skill="React JS"
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
