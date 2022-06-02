import { Article, LogoDev, PersonSharp } from "@mui/icons-material"
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
        <Article></Article>
        <label>Nome Teste</label>

        <Avatar sx={{ width: 26, height: 26, marginLeft: "4px" }}>
          <PersonSharp sx={{ background: "#2f2f2f" }} />
        </Avatar>
      </UserContainer>
    </Container>
  )
}

export default Header
