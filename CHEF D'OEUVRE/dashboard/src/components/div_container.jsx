import * as React from "react";
import divStyles from "../styles/index.jsx"


const div_container = (props) => {
const classes = divStyles();
  return( 
  <div className={classes.div}>
      {props}
  </div>);
};
export default div_container;
