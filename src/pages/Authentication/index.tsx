import {
    Container,
    Subtitle,
    Title,
    Wrap,
    Group,
    Hr,
    LoginForm,
} from "./styles";

import git from "assets/icons-rd/github-icon.svg";
import goog from "assets/icons-rd/google-icon.svg";
import linkedin from "assets/icons-rd/linkedin-icon.svg";

import { ButtonGoogle } from "components/Button";

/*  */

function Authentication() {
    return (
        <Container>
            <Wrap>
                <Title>bem-vindo</Title>
                <Subtitle>Por favor, entre para continuar.</Subtitle>
                <LoginForm>
                    <Hr />
                    <Group>
                        <ButtonGoogle
                            text="Continuar com Github"
                             img={git}
                            alt="google"
                            color="#11110F"                           
                        />
                    </Group>
                    <Group>
                        <ButtonGoogle
                            text="Continuar com Google"
                           img={goog}
                            alt="google"
                            color=" #f3584a"
                        />
                    </Group>
                    <Group>
                        <ButtonGoogle
                            text="Continuar com Linkedin"
                            img={linkedin}
                            alt="google"
                            color="#4078c0"
                        />
                    </Group>
                    <Hr />
                </LoginForm>
            </Wrap>
        </Container>
    );
}

export default Authentication;
