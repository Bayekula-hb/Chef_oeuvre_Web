import {styled} from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = ()=>{
    const SideBar = styled("div")(()=>({
        width:"15vw",
        height:"100vh",
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        borderRight:"4px solid #6C63FF"
    }));
    return(
        <SideBar>
            <MenuIcon sx={{ fontSize:"4rem", color:"#6C63FF"}}/>

        </SideBar>
    )
}
export default SideBar;