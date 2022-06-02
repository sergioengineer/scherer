import { LogoDev, PersonSharp } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { Spacer } from "../../globalStyles/globalStyleComponents"
import { Container, Logo, UserContainer } from "./styles"
const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <LogoDev />
        Scherer Sistemas
      </Logo>
      <Spacer />
      <UserContainer>
        <label>
          Olá, <b>Sergio C.</b>
        </label>

        <Avatar sx={{ width: 22, height: 22, marginLeft: "4px" }}>
          <PersonSharp sx={{ background: "#2f2f2f", width: "48px" }} />
        </Avatar>
      </UserContainer>
    </Container>
  )
}

export default Header
