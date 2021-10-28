import { makeStyles } from "@mui/styles";
import Formulaire from "../components/formulaire";
import imgBg from "../images/undraw_world_9iqb.svg";
import Box from "@mui/material/Box";
import CardMedia from '@mui/material/CardMedia';

const ConnexionPage = () => {
  const useStyles = makeStyles(({ imgBg }) => ({
    div: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      padding: "auto 0px",
      fontSize: "2rem",
      
    },
    '@media all and (max-device-width: 480px)': {
      div: {
        display: 'flex',
        flexDirection: "column-reverse",
        "& > div > img":{display:"none"},
        padding:"0px",
        // backgroundColor:"#FF718D",
        // color:"white"
      },
    },
    div_left: {
      width: "100%",
      height: "100%",
      color: "#1976D2",
      padding: "3% auto",
      display: "flex",
      flexDirection: "row",
      flexGrow: "auto",
    },
    div_right: {
      width: "100%",
      height: "100%",
      padding: "auto 0px",
    },
    illustration: {
      height: "10%",
      width: "100%",
      padding: "3% 0px",
      backgroundSize:"cover",
    },
  }));
  const styles = useStyles(imgBg);
  return (
    <div className={`${styles.div}`}>
      <div className={styles.div_left}>
        <Box
          component="div"
          sx={{
            // "& > :not(style)": {width: "25ch" },
            width : "50%",
            height: "10%",
            margin : "20% auto",
            display: "flex",
            flexDirection: "column",
            // border :"dashed",
            alignContent : "space-around",
            "& > h3 ": {textTransform:"uppercase", textAlign:"center"},
          }}
        >
          <h3>connexion</h3>
          <Formulaire />
        </Box>
      </div>
      <div className={styles.div_right}>
        {/* <img
          src={imgBg}
          alt="connexion with word"
          className={styles.illustration}
        /> */}
      <CardMedia
        sx={{
          width:"100%",
          padding :"auto",
          margin :"4% auto"
        }}
        component="img"
        image={imgBg}
        alt="connexion with word"
      />
      </div>
    </div>
  );
};
export default ConnexionPage;
