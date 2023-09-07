import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import MenuNavbarButton from "./MenuNavbarButton"

const NavbarComponent = (PhanLoai_dv, PhanLoai_tv) => {
    

    return (
    <div style={{ padding: '12px 10px 12px 12px', width:'68px', boxShadow: '0px 0px 5px 3px lightgray', height:'100%', zIndex:'-1'}}>

            <MenuNavbarButton icon="fa-solid fa-table-columns" label='' />

            <MenuNavbarButton icon="fa-solid fa-user" label='' />

            <MenuNavbarButton icon="fa-regular fa-chart-bar" label='' />

            <MenuNavbarButton icon="fa-solid fa-otter" label='' />
    </div>
    )

}

export default NavbarComponent