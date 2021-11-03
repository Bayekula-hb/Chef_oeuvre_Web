import * as React from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { TextField } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
//--
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
    container: {
      // margin: "7%",
      width:"100%",
      // padding:"10%",
      // border: "dashed",
    },
  }));
  const styles = useStyles();
  return (
    <FormikProvider>
      <div className={styles.container}>
        <FormControl sx={{ m: 1, width: "100%", "& > label":{fontSize:"1.8rem", mr:1},  }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            email
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            value={values.email}
            sx={{fontSize:"1.8rem", mr:1}}
            label="email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%", "& > label":{fontSize:"1.8rem", mr:1},  }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            sx={{fontSize:"1.8rem", mr:1}}
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
          />
        </FormControl>
        <Stack>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: "100%", m: 1 , fontSize:"1.8rem"}}
          >
            Envoyer
          </Button>
        </Stack>
      </div>
    </FormikProvider>
  );
};
export default FormLogin;
