import { styled } from "@stitches/react"

const Container = styled("div", {
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  width: "100%",
  background: "var(--md-palette-primary-light)",
  padding: "4px",
})

const MenuItem = styled("a", {
  marginRight: "6px",
  fontSize: "13px",
  color: "#1f1f1f",
  "&:hover": {
    color: "white",
    cursor: "pointer",
  },
})

export { Container, MenuItem }
