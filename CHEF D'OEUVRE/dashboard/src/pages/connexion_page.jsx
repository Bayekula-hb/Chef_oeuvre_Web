// import Box from "@mui/material/Box";
// import Page from "../components/pages";
import { Typography, Stack } from "@mui/material";
import ImageIllustration from "../images/undraw_world_9iqb.svg";
import { makeStyles, styled } from "@mui/styles";
import { SectionRow, SectionColumn } from "../components/div";
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
    Section: {
      width: "50vw",
    },
    SectionLogin: {
      // margin: "25%",
      // width: "50%",
      // padding: "10%",
      border: "dashed",
    },
  }));
  const styles = useStyles();
  return (
    <SectionContainer>
      <SectionColumn className={(styles.Section, styles.SectionLogin)}>
        <Stack>
          <Typography
            variant="h3"
            component="h2"
            sx={{ border: "dashed" }}
            // sx={{ px: 5, mt: 10, mb: 5, color: "#343F59" }}
          >
            Connexion
          </Typography>
        </Stack>
        <FormLogin  sx={{ border: "dashed" }} />
      </SectionColumn>
      <SectionRow className={styles.Section}>
        <img src={ImageIllustration} alt="login" className={styles.Image} />
      </SectionRow>
    </SectionContainer>
  );
};
export default ConnexionPage;
