import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import logo from "../public/assets/navLogo.png"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"
import { Link as Scroll } from "react-scroll"
import { useRouter } from "next/router"

type Props = {}

const NavBar = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)
  const [navBg, setNavBg] = useState<string>("#ecf0f3")
  const [linkColor, setLinkColor] = useState<string>("#1f2937")
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/") {
      setNavBg("#ecf0f3")
      setLinkColor("#1f2937")
    } else {
      setNavBg("transparent")
      setLinkColor("#f8f8f8")
    }
  }, [router])

  const openNav = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setNav(true)
  }

  const closeNav = (
    event: React.MouseEvent<HTMLDivElement | HTMLElement, MouseEvent>
  ) => {
    setNav(false)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: navBg }}
        className={`fixed w-full md:h-20 h-16 z-20 ${
          shadow ? "shadow-xl" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link scroll={true} href="/#home">
            <Image
              className="cursor-pointer"
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <div style={{ color: linkColor }}>
            <ul className="hidden md:flex">
              <Link scroll={true} href="/#home">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link scroll={true} href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link scroll={true} href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link scroll={true} href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link scroll={true} href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="md:hidden" onClick={openNav}>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* smartphone menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 flex flex-col top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
                : "fixed -left-full flex flex-col top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src={logo} alt="logo" width={50} height={50} />
                <div
                  onClick={closeNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build something legendary together
                </p>
              </div>
            </div>

            <div className="flex flex-col py-4 justify-between flex-1">
              <div>
                <ul className="uppercase">
                  <Link scroll={true} href="/#home">
                    <li onClick={closeNav} className="py-4 text-sm">
                      Home
                    </li>
                  </Link>
                  <Link scroll={true} href="/#about">
                    <li onClick={closeNav} className="py-4 text-sm">
                      About
                    </li>
                  </Link>
                  <Link scroll={true} href="/#skills">
                    <li onClick={closeNav} className="py-4 text-sm">
                      Skills
                    </li>
                  </Link>
                  <Link scroll={true} href="/#projects">
                    <li onClick={closeNav} className="py-4 text-sm">
                      Projects
                    </li>
                  </Link>
                  <Link scroll={true} href="/#contact">
                    <li onClick={closeNav} className="py-4 text-sm">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="pt-4">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-4/5 mx-auto">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar
