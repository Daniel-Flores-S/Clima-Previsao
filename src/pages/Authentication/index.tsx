import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Container, AsideContainer, MainContainer } from "./styles";

import logo from "assets/logo.png";
import illustration from "assets/illustration.png";

function Authentication() {
    return (
        <Container>
            <AsideContainer>
                <img src={illustration} alt="ilustração previsão do tempo" />
                <strong>Entre e veja a previsão do tempo em sua região</strong>
            </AsideContainer>

            <MainContainer>
                <InnerContainer>
                    <button className="create-room">
                        <FaGoogle />
                        Continue with Google
                    </button>

                    <button>
                        <FaFacebookF />
                        Continue with Facebook
                    </button>
                    <button>
                        <FaGithub />
                        Continue with GitHub
                    </button>
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
