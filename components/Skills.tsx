import Image from "next/image"
import React from "react"
import aws from "../public/assets/skills/aws.png"
import css from "../public/assets/skills/css.png"
import firebase from "../public/assets/skills/firebase.png"
import github1 from "../public/assets/skills/github1.png"
import html from "../public/assets/skills/html.png"
import javascript from "../public/assets/skills/javascript.png"
import mongo from "../public/assets/skills/mongo.png"
import nextjs from "../public/assets/skills/nextjs.png"
import node from "../public/assets/skills/node.png"
import react from "../public/assets/skills/react.png"
import shopify from "../public/assets/skills/shopify.png"
import tailwind from "../public/assets/skills/tailwind.png"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascript} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={firebase} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github1} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={shopify} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
