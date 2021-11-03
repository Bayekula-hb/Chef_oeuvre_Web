import { styled } from "@mui/material";
import CardEntity from "../components/card";
import ContainerProvince from "../components/containerProvince";
import PersistentDrawerLeft from "../components/menuSibebar";
// import SideBar from "../components/sidebar";
const Home = () => {
  const HomeContainer = styled("div")(() => ({
    display: "flex",
  }));
  return (
    <HomeContainer>
      {/* <SideBar/> */}
      <PersistentDrawerLeft/>
      {/* <PersistentDrawerLeft> */}
        <ContainerProvince />
      {/* </PersistentDrawerLeft> */}
      {/* <CardEntity>kinshasa</CardEntity> */}
    </HomeContainer>
  );
};
export default Home;
