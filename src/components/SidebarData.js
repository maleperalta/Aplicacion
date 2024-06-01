import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'New Patient',
        path: '/newpatient',
        icon: <TiIcons.TiUserAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Visualize Signals',
        path: '/signals',
        icon: <BsIcons.BsFillHeartPulseFill />,
        cName: 'nav-text'
    },
    {
        title: 'Analyze Signals',
        path: '/analyzesignals',
        icon: <IoIcons.IoMdAnalytics />,
        cName: 'nav-text'
    }
    ,
    {
        title: 'All Patients',
        path: '/patients',
        icon: <FaIcons.FaTable />,
        cName: 'nav-text'
    }
]