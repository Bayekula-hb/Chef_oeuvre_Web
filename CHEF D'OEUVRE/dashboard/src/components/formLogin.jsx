import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { SectionColumn } from "./div";
import { makeStyles } from "@mui/styles";

const FormLogin = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const useStyles = makeStyles(() => ({
    div: {
      height: "99vh",
      // border: "dashed",
      width: "50%",
      color: "#C4C4C4",
    },
    SousDiv: {
      // margin:"35%",
      "& > div": { margin: "5%", alignSelf:"center", "&>label":{fontSize:"1.3rem"} },
      // margin: "25%",
      // width: "50%",
      // padding: "10%",
      // // border: "dashed",
      // flexDirection: "column",
      // alignContent: "space-between",
    },
  }));
  const styles = useStyles();
  return (
      <Box component="form" className={styles.div}>
        <SectionColumn className={styles.SousDiv}>
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Adresse mail"
          />
          <TextField
            fullWidth
            autoComplete="password"
            type="password"
            label="password"
          />
          {/* <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}
          <Button variant="contained" endIcon={<SendIcon />}>
            se connecter
          </Button>
        </SectionColumn>
      </Box>
  );
};
export default FormLogin;
