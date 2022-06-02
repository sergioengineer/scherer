import { styled } from "@mui/system"

const Container = styled("header")(({ theme }) => ({
  display: "flex",
  width: "100vw",
  padding: "4px",
  height: "40px",
}))

const Logo = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
}))

const UserContainer = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
  marginRight: "8px",
  border: "0px solid #1f1f1f",
  padding: "0px 4px",
  borderRadius: "4px",
  minWidth: "100px",
  justifyContent: "space-between",
  color: "#2f2f2f",
}))

export { Container, Logo, UserContainer }
