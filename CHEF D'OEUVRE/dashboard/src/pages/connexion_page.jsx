// import Box from "@mui/material/Box";
// import Page from "../components/pages";
import ImageIllustration from "../images/undraw_world_9iqb.svg";
import { makeStyles, styled } from "@mui/styles";
import { SectionRow } from "../components/div";
import FormLogin from "../components/formLogin";

const ConnexionPage = () => {
  const SectionContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
  }));
  const useStyles = makeStyles(() => ({
    Image: {
      width: "100%",
    },
      Section:{
          width:"50vw",
      }
  }));
  const styles = useStyles();
  return (
    <SectionContainer>
      <FormLogin className={styles.Section} />
      <SectionRow className={styles.Section}>
        <img src={ImageIllustration} alt="login" className={styles.Image} />
      </SectionRow>
    </SectionContainer>
  );
};
export default ConnexionPage;
