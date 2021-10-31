import {styled, makeStyles} from "@mui/material";
import SideBar from "../components/sidebar";
const Home = ()=>{
    const HomeContainer = styled("div")(()=>({
        display:"flex",
    }))
    return(
        <HomeContainer>
            <SideBar/>
        </HomeContainer>
    )
}
export default Home;