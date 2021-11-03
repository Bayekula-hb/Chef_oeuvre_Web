import { Typography, Stack } from "@mui/material";
import ImageIllustration from "../images/undraw_world_9iqb.svg";
import { MHidden } from "../components/@material-extend";
import { makeStyles, styled } from "@mui/styles";
import FormLogin from "../components/formLogin";

const ConnexionPage = () => {
  const SectionContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
  }));
  const SectionStyle = styled("div")(({ theme }) => ({
    // width: "100%",
    // maxWidth: 564,
    maxHeight: "98vh",
    boxShadow: 0,
    display: "flex",
    // border: "1px solid",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: "middle",
    margin: theme.spacing(0, 0, 5, 7),
  }));
  const ContainerForm = styled("div")(({ theme }) => ({
    color: "#343F59",
    // maxWidth: 580,
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin:0,
  }));
  const useStyles = makeStyles(() => ({
    div: {
      width: "60vw", 
      // padding: "12%",
      padding: "8%",
      fontSize:"6.6rem",
      // border:"dashed",
    },
    Image:{
      maxHeight:"100%",
      maxWidth:"100%",
      // border:"dashed"
    }
  }));
  const styles = useStyles();
  return (
    <SectionContainer>
      <ContainerForm className={styles.div}>
        <Stack sx={{ m: 1 }}>
          <Typography variant="h3" gutterBottom>
            Boyeli Malamu
          </Typography>
        </Stack>
        <FormLogin />
      </ContainerForm>
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography
            variant="h3"
            sx={{ color: "#343F59",m:2}}
            // sx={{ px: 5, mt: 5, mb: 3, color: "#343F59" }}
          >
            Lopango Infos
          </Typography>
          <img src={ImageIllustration} className={styles.Image} alt="Lopango/Terre" />
        </SectionStyle>
      </MHidden>
    </SectionContainer>
  );
};
export default ConnexionPage;
