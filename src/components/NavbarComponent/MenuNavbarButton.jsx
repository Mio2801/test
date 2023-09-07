import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MenuNavbar, MenuNavbarTitle } from "./style"


const MenuNavbarButton = ({label,icon}) => {
    
    return(
        <MenuNavbar>
            <FontAwesomeIcon icon={icon} style={{ color: "#757575", fontSize: '20px', marginRight: '25px' }} />
            <MenuNavbarTitle>{label}</MenuNavbarTitle>
        </MenuNavbar>
    )       
}
export default MenuNavbarButton