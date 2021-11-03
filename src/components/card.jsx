import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const CardEntity = (props) => {
  return (
    <Box sx={{ m:"1%",width:"30%", fontSize:"1.8rem",borderRadius:"4px", backgroundColor:"#6C63FF", color:"#FFF", border:"2px solid #6C63FF", "&:hover":{backgroundColor:"transparent", color:"#6C63FF", border:"2px solid #6C63FF"}}}>
      <Typography component="h4" sx={{fontSize:"1.8rem", padding:"2%", textAlign:"center", alignSelf:"center"}}>
          {props.children}
      </Typography>
    </Box>
  );
};
export default CardEntity;
