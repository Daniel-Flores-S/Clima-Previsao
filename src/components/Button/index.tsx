import { useAuthGoogle } from "data/hooks/useAuthGoogle";
import GoogleLogin from "react-google-login";

import { Btn } from "./styles";

type ButtonProps = {
    img: string;
    alt: string;
    color: string;
    text: string;
};

export const ButtonGoogle = (props: ButtonProps) => {
    const {responseGoogle } = useAuthGoogle();

    const key = process.env.REACT_APP_GOOGLE_KEY || "";
    return (
        <GoogleLogin
            clientId={key}
            render={(renderProps) => (
                <Btn
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{ background: props.color }}
                >
                    <img src={props.img} alt={props.alt} />
                    <span>{props.text}</span>
                </Btn>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
};

