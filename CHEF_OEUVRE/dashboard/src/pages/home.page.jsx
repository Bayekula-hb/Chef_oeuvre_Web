import {styled, makeStyles} from "@mui/material";
import PersistentDrawerLeft from "../components/menuSibebar";
import SideBar from "../components/sidebar";
const Home = ()=>{
    const HomeContainer = styled("div")(()=>({
        display:"flex",
    }))
    return(
        <HomeContainer>
            {/* <SideBar/> */}
            <PersistentDrawerLeft />
        </HomeContainer>
    )
}
export default Home;