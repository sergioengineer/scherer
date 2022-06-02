import { styled } from "@mui/system"

const Container = styled("header")(({ theme }) => ({
  display: "flex",
  width: "100vw",
  padding: "4px",
}))

const Logo = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
}))

const Spacer = styled("div")(({ theme }) => ({
  display: "inline-flex",
  flexGrow: "1",
}))

const UserContainer = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
  marginRight: "8px",
  border: "1px solid" + theme.palette.primary.main,
  padding: "4px",
  borderRadius: "4px",
  color: theme.palette.primary.light,
}))

export { Container, Logo, Spacer, UserContainer }
