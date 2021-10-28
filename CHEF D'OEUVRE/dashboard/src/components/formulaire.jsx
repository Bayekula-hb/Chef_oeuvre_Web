import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// import imgBg from "../images/undraw_world_9iqb.svg";

const Formulaire = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > *": {margin:"10% 0%"},
        "& > *> label ": {fontSize: "1.6rem"},
        padding : "5%",
        fontSize: "1.6rem",
        display : "flex",
        flexDirection : "column",
        alignContent:"justify-between",
        "& > Button":{width:"50%", alignSelf:"center", fontSize:"1.3rem"},
        "& > Button:hover":{backgroundColor:"transparent", color:"#1976D2"},
        '@media all and (max-device-width: 480px)': {
        //  "&":{backgroundImage:`url(${imgBg})`, backgroundSize:"cover"},
          "&":{
            fontSize:"1rem",
            "& > Button":{
              fontSize : "0.8rem",
              width : "auto"
            },
            padding:"0px",
            "& > form > *":{
              width : "auto",
            },
          }
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="email" type="email" />
      <TextField id="outlined-basic" label="password" type="password" />
      <Button variant="contained" endIcon={<SendIcon />}>
        se connecter
      </Button>
    </Box>
  );
};
export default Formulaire;
