import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import {
    Container,
    AsideContainer,
    MainContainer,
    InnerContainer,
    Title,
    LogoImg,
    BtnGM,
    BtnFC,
    BtnGH,
    Illustration,
} from "./styles";

import logo from "assets/logo.png";
import illustration from "assets/illustration.png";

function Authentication() {
    return (
        <Container >
            <AsideContainer>
                <Illustration
                    src={illustration}
                    alt="ilustração previsão do tempo"
                />

                <Title>Crie salas de Q&A ao-vivo</Title>
                <p>Centro de Previsão de Tempo e Estudos Climáticos</p>
            </AsideContainer>

            <MainContainer>
                <InnerContainer>
                    <Title>
                        <LogoImg src={logo} alt="logo ilustração nuvem e sol" />
                        Clima Tempo
                    </Title>

                    <BtnGM to="/home">
                        <FaGoogle style={{ marginRight: 10 }} />
                        Google
                    </BtnGM>

                    <BtnFC to="/home">
                        <FaFacebookF style={{ marginRight: 10 }} />
                        Facebook
                    </BtnFC>

                    <BtnGH to="/home">
                        <FaGithub style={{ marginRight: 10 }} />
                        GitHub
                    </BtnGH>
                </InnerContainer>
            </MainContainer>
        </Container>
    );
}

export default Authentication;
/*<Container>
            <AsideContainer>
                <Title>
                    Login
                </Title>
                <AuthGmail>
                    <FaGoogle /> Gmail
                </AuthGmail>
                <AuthFace>
                    <FaFacebookF color={"#ffffff"} />
                    Facebook
                </AuthFace>
                <AuthGithub>
                    <FaGithub color={"#ffffff"} />
                    Git
                </AuthGithub>
            </AsideContainer>
        </Container>*/
