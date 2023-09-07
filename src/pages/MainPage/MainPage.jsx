import React, { memo } from "react"
//import { HeaderMenu, LienHe, LoginButton } from "./style"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import logo from '../../img/logo.png'
//import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { authUser } from "../../stores/auth"
import { useLogRender } from "../../hook/useLogRender"
import AnimalManagerPage from "../AnimalManagerPage/AnimalManagerPage"
import 'bootstrap/dist/css/bootstrap.css';

const MainPage = memo(() => {

    const user = useSelector(authUser);
    useLogRender("Layout-Header");  
    let content = null;
    if (user && user.id) {
      content = (
        <>
          <AnimalManagerPage />
        </>
      );
    } else {
      content = (
        <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{height:'500px'}}>
            <h1>GET STARTED</h1>
            <div>
                <button href="/login"> Đăng nhập </button>
            </div>
        </div>
      );
    }


    return (
        <>
        {content}
        </>
    )
})


        // <div>
        //     <div style={{background:'#ad180d', height:'45px', paddingRight:'64px', display:'flex', flexDirection:'row-reverse', alignItems:'center'}}>
        //         <LoginButton>
        //             {content}
        //         </LoginButton>
        //     </div>
        //     <div style={{background:'#da2a1c', height:'111px', display:'flex', alignItems:'center', paddingLeft:'24px', justifyContent:'space-between'}}>
        //         <img src={logo} style={{height:'80px'}} alt="logo" />
        //         <div>
        //             <input type="search" style={{padding: '19px', height:'26px', width:'262px', outline:'none'}} placeholder="Tìm kiếm" />
        //             <button style={{background:'rgb(64 79 90)', width:'42px', height:'42px', color:'#fff', border:'none'}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
        //             <span style={{color:'#fff', marginLeft:'25px', borderBottom:'1px solid #fff'}}>Nâng cao</span>
        //         </div>
        //         <div style={{display:'flex', paddingRight:'24px', textAlign:'center'}}>
        //             <HeaderMenu>Bản tin</HeaderMenu>
        //             <HeaderMenu>Giới thiệu</HeaderMenu>
        //             <HeaderMenu>Tài liệu</HeaderMenu>
        //             <LienHe>Liên hệ</LienHe>
        //         </div>
        //     </div>
        // </div>

export default MainPage