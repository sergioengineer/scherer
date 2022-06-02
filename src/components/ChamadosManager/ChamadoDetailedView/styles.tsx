import { Paper } from "@mui/material"
import { lightBlue } from "@mui/material/colors"
import { styled } from "@mui/system"

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "8px",
}))

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  padding: "4px",
  "& .gridHeader": {
    background: lightBlue[100],
  },
}))

const TextSection = styled(Paper)(({ theme }) => ({
  overflowY: "scroll",
  display: "flex",
  flex: 1,
  padding: "12px",
  maxHeight: "350px",
}))

export { Container, Section, TextSection }
