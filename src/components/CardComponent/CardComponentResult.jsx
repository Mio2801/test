import React from "react"
import QRcode from "../../img/googleQRcodes.png"
import { Card, CardButton } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardComponentResult = ({ten, ten_khoa_hoc, kingdom_ten, phylumn_ten, img_card, status, sachdo, iucn }) => {
    
    
    return(
        <Card>
            <div className="img">
                <img style={{borderRadius: '5px 5px 0 0',width: '100%', height:'250px',objectFit:'cover'}} 
                // src={`http://wlp.howizbiz.com${img_card}`} 
                src = {img_card}
                alt="" />
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <p style={{margin:'0',padding:'12px 0 0 16px'}}>{kingdom_ten} - {phylumn_ten}</p>
                    <h3 style={{margin:'0', padding:'4px 0 0 16px'}}>{ten}</h3>
                    <i style={{padding:'4px 0 0 16px'}}>{ten_khoa_hoc}</i>
                    
                </div>
                <div>
                    <img style={{width:'60px',paddingRight:'12px', paddingTop:'9px'}} src={QRcode} alt="" />
                </div>
            </div>
            <div style={{display:'flex', padding:'12px 8px',justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                    <FontAwesomeIcon icon="fa-regular fa-circle-question" style={{color: "#c2c2c2",width:'36px', height:'36px',marginTop:'5px'}} />
                    <div style={{margin:'0 0 0 5px',display:'flex',alignItems:'center'}}> Chưa xác định</div>
                </div>
                <div>
                    <CardButton style={{background:'#e91e63'}}>VU</CardButton>
                    <CardButton style={{background:'#f44336'}}>VU</CardButton>
                </div>
            </div>
        </Card>
    )
}

export default CardComponentResult