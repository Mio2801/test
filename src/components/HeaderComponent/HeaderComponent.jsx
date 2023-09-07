import React, { memo } from "react"
import logo from '../../img/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { authUser } from "../../stores/auth"
import { useLogRender } from "../../hook/useLogRender"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.css';
import "./style.scss"

const HeaderComponent = memo(() => {
    const user = useSelector(authUser);
    useLogRender("Layout-Header");  

    return (
        <>
        <div className="head" style={{}}>
                <div style={{display:'flex'}}>
                    <div className="head_btn">
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </div>
                    <img src={logo} style={{height:'40px', paddingRight:'20px'}} alt="logo" />
                    <div style={{display:'flex', alignItems:'center', width:'100%'}}>
                        <h4 style={{fontSize:'20px', fontWeight:'400'}}>HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ</h4>
                    </div>
                </div>
                <div className="user_pf d-flex">
                    <div className="user_pfp"><b> {user.name.slice(0, 1)} </b></div>
                    <div className="d-flex align-items-center">
                        <Link className="user_name" to='/auth/logout'>{user.name}</Link>
                    </div>
                </div>
            </div>
        </>
    )
})

export default HeaderComponent