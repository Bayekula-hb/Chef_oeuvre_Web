import { styled } from "@mui/styles";

const SectionRow = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  //   alignContent: "space-between",
  justifyContent: "space-between",
}));

const SectionColumn = styled("div")(() => ({
  display: "flex",
  // flexDirection: "column",
  // justifyContent: "space-between",
  // alignContent:"space-between",
}));

export { SectionRow, SectionColumn };
