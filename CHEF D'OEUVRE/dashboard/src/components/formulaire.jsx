import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Formulaire = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > *": {margin:"10%"},
        "& > *> label ": {fontSize: "1.6rem"},
        padding : "5%",
        // margin : "20%",
        fontSize: "1.6rem",
        display : "flex",
        flexDirection : "column",
        alignContent : "space-between",
        "& > Button":{width:"50%", alignSelf:"center", fontSize:"1.3rem"},
        "& > Button:hover":{backgroundColor:"transparent", color:"#1976D2"},
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
