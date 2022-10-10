import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import contact from "../public/assets/contact.jpg"
import { Link as Scroll } from "react-scroll"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="hover:scale-105 duration-200">
                <Image className="rounded-xl " src={contact} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Megumu Tokuda</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg flex p-3 border-gray-300"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone_number"
                      className="uppercase text-sm py-2"
                    >
                      Phone number
                    </label>
                    <input
                      className="border-2 rounded-lg flex p-3 border-gray-300"
                      type="text"
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg flex p-3 border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg flex p-3 border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    rows={10}
                    className="border-2 rounded-lg flex p-3 border-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r text-gray-100 mt-4 p-4 w-full"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-12">
          <Scroll to="home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={25}
              />
            </div>
          </Scroll>
        </div>
      </div>
    </div>
  )
}

export default Contact
