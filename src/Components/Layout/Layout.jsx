import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './LayoutStyle.scss'



export default function Layout() {
    return (
        <>
            <div className="layoutContainer">
                <Navbar />

                <Outlet />
            </div>


        </>
    )
}
