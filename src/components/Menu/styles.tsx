import { styled } from "@mui/system"

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  width: "100%",
  background: theme.palette.primary.light,
  padding: "6px",
}))

const MenuItem = styled("a")(({ theme }) => ({
  all: "unset",
  marginRight: "6px",
  fontSize: "13px",
  color: "#1f1f1f",
  "&:hover": {
    color: "white",
    cursor: "pointer",
  },
}))

export { Container, MenuItem }
