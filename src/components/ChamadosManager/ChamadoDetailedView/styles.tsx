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
}))

const TextSection = styled(Section)(({ theme }) => ({
  overflow: "scroll",
}))

export { Container, Section, TextSection }
