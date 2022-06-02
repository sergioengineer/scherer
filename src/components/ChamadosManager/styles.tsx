import { Button } from "@mui/material"
import { lightBlue } from "@mui/material/colors"
import { styled } from "@mui/system"

const Container = styled("div")(({ theme }) => ({
  marginTop: "8px",
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  flexGrow: "1",
  flexDirection: "column",
}))

const TitleBar = styled("div")(({ theme }) => ({
  background: theme.palette.primary.light,
  color: "white",
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingLeft: "4px",
  height: "30px",
}))

const TitleControlSection = styled("div")(({ theme }) => ({
  background: theme.palette.primary.light,
  color: "white",
  display: "flex",
  alignItems: "center",
  marginRight: "12px",
}))

const GridControlSection = styled("div")(({ theme }) => ({
  paddingTop: "4px",
  paddingBottom: "4px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  background: lightBlue[100] + "55",
  height: "30px",
}))

const GridControl = styled(Button)(({ theme }) => ({
  padding: "2px 8px",
  display: "flex",
  margin: "0px 2px",
  alignItems: "center",
}))

const GridContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "400px",
  "& .gridHeader": {
    background: theme.palette.primary.light,
    border: "1px solid " + theme.palette.primary.main,
    fontSize: "13px",
    color: "white",
  },
}))

export {
  Container,
  TitleBar,
  TitleControlSection,
  GridContainer,
  GridControlSection,
  GridControl,
}
