import { styled } from "@stitches/react"

const Container = styled("header", {
  display: "flex",
  width: "100vw",
  padding: "4px",
})

const Logo = styled("div", {
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
})

const Spacer = styled("div", { display: "inline-flex", flexGrow: "1" })

const UserContainer = styled("div", {
  display: "inline-flex",
  alignContent: "center",
  alignItems: "center",
  marginRight: "8px",
  border: "1px solid var(--md-palette-primary-dark)",
  padding: "4px",
  borderRadius: "4px",
  color: "var(--md-palette-primary-light)",
})

export { Container, Logo, Spacer, UserContainer }
