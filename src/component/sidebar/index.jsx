"use client";
import ProtoTypes from "prop-types";
import bg from "/public/static/images/bg/upgrade-bg.png";
/* import logo from "/public/static/images/logo/logo-color.svg";
import logoW from "/public/static/images/logo/logo-white.svg"; */
import profileImg from "/public/static/images/avatar/profile-xs.png";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  FaRegPenToSquare,
  FaRegFileLines,
  FaHouseChimney,
  FaRegImage,
  FaHatWizard,
  FaUserGraduate,
  FaCode,
  FaMicrophoneLines,
  FaVolumeHigh,
  FaEuroSign,
  FaHeadset,
  FaPowerOff,
  FaSliders,
} from "react-icons/fa6";

function Sidebar({ handleActive }) {
  const [activeDashboard, setActiveDashboard] = useState(false);
  return (
    <aside className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white dark:bg-darkblack-600 sm:hidden xl:block">
      <div className="sidebar-header relative z-30 flex h-[108px] w-full items-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] pl-[50px] dark:border-darkblack-400">
        <Link href="/">
          <h1 className="logo text-2xl font-semibold leading-none text-bgray-900 dark:text-white">
            Omnithus{" "}
          </h1>
          {/* <Image
            priority={true}
            height={logo.height}
            width={logo.width}
            src={logo.src}
            className="block dark:hidden"
            alt="logo"
          />
          <Image
            priority={true}
            height={logoW.height}
            width={logoW.width}
            src={logoW.src}
            className="hidden dark:block"
            alt="logo"
          /> */}
        </Link>
        <button
          aria-label="none"
          type="button"
          onClick={handleActive}
          className="drawer-btn absolute right-0 top-auto"
          title="Ctrl+b"
        >
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 16 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                fill="#22C55E"
              />
              <path
                d="M10 15L6 20.0049L10 25.0098"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="sidebar-body overflow-style-none relative z-30 h-screen w-full overflow-y-scroll pb-[200px] pl-[48px] pt-[14px]">
        <div className="nav-wrapper mb-[36px] pr-[50px]">
          <div className="item-wrapper mb-5">
            <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
              Menu
            </h4>
            <ul className="mt-2.5">
              <li
                className="item py-[11px] text-bgray-900 dark:text-white"
                onClick={() => setActiveDashboard(!activeDashboard)}
              >
                <a className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaHouseChimney />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Dashboard
                      </span>
                    </div>
                    {/* <span>
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="currentColor"
                          d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                        />
                      </svg>
                    </span> */}
                  </div>
                </a>
                {/*     <ul
                  className={`sub-menu ml-2.5 mt-[22px] border-l border-success-100 pl-5 ${
                    activeDashboard && "active"
                  }`}
                >
                  <li>
                    <Link
                      href="/"
                      className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
                    >
                      Dashboard Default
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-2"
                      className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
                    >
                      Dashboard Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/statistics"
                      className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
                    >
                      Dashboard Three
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/analytics"
                      className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
                    >
                      Dashboard Four
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-five"
                      className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
                    >
                      Dashboard Five
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/transaction">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaRegFileLines />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Workbook
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/statistics">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaRegPenToSquare />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Writers
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/analytics">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaRegImage />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Images
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/my-wallet">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaHatWizard />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Article Wizard
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/messages">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8889 22C13.4278 22 14.737 21.0724 15.2222 19.7778H8.55554C9.04075 21.0724 10.35 22 11.8889 22Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.7662 2.83781C13.3045 2.32351 12.6345 2 11.8889 2C10.4959 2 9.36673 3.12921 9.36673 4.52216V4.6374C6.98629 5.45244 5.224 7.38959 4.95607 9.75021L4.4592 14.1281C4.36971 14.9165 4.03716 15.6684 3.49754 16.3024C2.27862 17.7343 3.43826 19.7778 5.46979 19.7778H18.308C20.3395 19.7778 21.4992 17.7343 20.2802 16.3024C19.7406 15.6684 19.4081 14.9165 19.3186 14.1281L18.8217 9.75021C18.8148 9.68916 18.8068 9.6284 18.7979 9.56793C18.3712 9.70421 17.9164 9.77778 17.4444 9.77778C14.9898 9.77778 13 7.78793 13 5.33333C13 4.40827 13.2826 3.54922 13.7662 2.83781Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="17.4444"
                            cy="5.33333"
                            r="3.33333"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Inbox
                      </span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <span>
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.879751 10.0038L3.16823 9.67657C3.49833 9.62937 3.80424 9.47626 4.04003 9.24024L8.45886 4.81709C8.45886 4.81709 7.36911 4.81709 6.27936 3.72628C5.18961 2.63546 5.18961 1.54465 5.18961 1.54465L0.770776 5.9678C0.534986 6.20382 0.382033 6.51002 0.334876 6.84045L0.00795056 9.13116C-0.0646994 9.64021 0.371201 10.0765 0.879751 10.0038Z"
                            fill="#1A202C"
                          />
                          <path
                            opacity="0.4"
                            d="M9.5487 1.5446L8.45895 0.453784C7.8571 -0.148657 6.8813 -0.148657 6.27945 0.453784L5.1897 1.5446C5.1897 1.5446 5.1897 2.63542 6.27945 3.72623C7.3692 4.81705 8.45895 4.81705 8.45895 4.81705L9.5487 3.72623C10.1506 3.12379 10.1506 2.14704 9.5487 1.5446Z"
                            fill="#1A202C"
                          />
                        </svg>
                      </span>
                      
                      <div>
                        <Image
                          priority={true}
                          height={profileImg.height}
                          width={profileImg.width}
                          src={profileImg.src}
                          alt="profile"
                        />
                      </div>
                      
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success-300">
                        <span className="text-[10px] font-semibold text-white">
                          5
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li> */}
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/integrations">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaUserGraduate />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Coaches
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/users">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaCode />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Code
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/calender">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaMicrophoneLines />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Speech to Text
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/history">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaVolumeHigh />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        AI Voiceover
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item-wrapper mb-5">
            <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
              Help
            </h4>
            <ul className="mt-2.5">
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/support-ticket">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaEuroSign />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Affiliates
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/support-ticket">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaHeadset />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Support
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/settings">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaSliders />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Settings
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item-wrapper mb-5">
            <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
              Others
            </h4>
            <ul className="mt-2.5">
              {/* <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/signin">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Signin
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/signup">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="11.7778"
                            cy="17.5555"
                            rx="7.77778"
                            ry="4.44444"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="11.7778"
                            cy="6.44444"
                            r="4.44444"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Signup
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/coming-soon">
                  <div className="flex items-center space-x-2.5">
                    <span className="item-ico">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4 17.2C19.8833 19.1777 18.4721 22 16 22L8 22C5.52786 22 4.11672 19.1777 5.6 17.2L8.15 13.8C8.95 12.7333 8.95 11.2667 8.15 10.2L5.6 6.8C4.11672 4.82229 5.52787 2 8 2L16 2C18.4721 2 19.8833 4.82229 18.4 6.8L15.85 10.2C15.05 11.2667 15.05 12.7333 15.85 13.8L18.4 17.2Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          d="M12.7809 9.02391C12.3805 9.52432 11.6195 9.52432 11.2191 9.02391L9.29976 6.6247C8.77595 5.96993 9.24212 5 10.0806 5L13.9194 5C14.7579 5 15.2241 5.96993 14.7002 6.6247L12.7809 9.02391Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <span className="item-text text-lg font-medium leading-none">
                      Coming Soon
                    </span>
                  </div>
                </Link>
              </li>
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="/404">
                  <div className="flex items-center space-x-2.5">
                    <span className="item-ico">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          d="M9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 12.75C9.58579 12.75 9.25 12.4142 9.25 12L9.25 5C9.25 4.58579 9.58579 4.25 10 4.25C10.4142 4.25 10.75 4.58579 10.75 5L10.75 12C10.75 12.4142 10.4142 12.75 10 12.75Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <span className="item-text text-lg font-medium leading-none">
                      404
                    </span>
                  </div>
                </Link>
              </li> */}
              <li className="item py-[11px] text-bgray-900 dark:text-white">
                <Link href="#">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className="item-ico">
                        <FaPowerOff />
                      </span>
                      <span className="item-text text-lg font-medium leading-none">
                        Logout
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="upgrade-wrapper mb-[26px] h-[172px] w-full pr-[24px]">
          <div
            className="upgrade-banner relative h-full w-full rounded-lg"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* <div
              style={{ left: `calc(50% - 20px); top: -20px` }}
              className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-white bg-success-300 dark:border-gray-200"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 12.75C14 11.7835 13.1046 11 12 11C10.8954 11 10 11.7835 10 12.75C10 13.7165 10.8954 14.5 12 14.5C13.1046 14.5 14 15.2835 14 16.25C14 17.2165 13.1046 18 12 18C10.8954 18 10 17.2165 10 16.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 9.5V11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V19.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.63246 11.1026C6.44914 8.65258 8.74197 7 11.3246 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3246C6.22921 22 3.33739 17.9878 4.63246 14.1026L5.63246 11.1026Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div> */}
            <h1 className="mb-2 pt-8 text-center text-xl font-bold text-white">
              Invite your friends
            </h1>
            <p className="mb-2 px-7 text-center text-sm leading-5 text-white opacity-[0.5]">
              Instant 10% provision for invited friends.
            </p>
            <div className="flex justify-center">
              <a href="#">
                <div className="flex h-[36px] w-[134px] justify-center rounded-lg bg-success-300 transition duration-300 ease-in-out hover:bg-success-400">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-semibold text-white">
                      Invite Now
                    </span>
                    <span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33301 4H10.6663"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 6.66667L10.6667 4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1.33325L10.6667 3.99992"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copy-write-text">
          <p className="text-sm text-[#969BA0]">© 2023 All Rights Reserved</p>
          <p className="text-sm font-medium text-bgray-700">
            Made with ❤️ by
            <a
              href="#"
              target="_blank"
              className="border-b font-semibold hover:text-blue-600"
            >
              CodeLab
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  handleActive: ProtoTypes.func,
};

export default Sidebar;
