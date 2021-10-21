import { useState } from "react";

import { useHistory } from "react-router-dom";
import { useToken } from "data/hooks/useToken";

import {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";

export const useAuthGoogle = () => {
    const history = useHistory();
    const { addToken, addUser } = useToken();

    const [name, setName] = useState(""),
        [email, setEmail] = useState(),
        [photo, setPhoto] = useState(),
        [googleId, setGoogleId] = useState();

    const responseGoogle = (
        response: GoogleLoginResponse | any | GoogleLoginResponseOffline
    ) => {
        const {
            profileObj: { name, email, imageUrl, googleId }, 
        } = response;

        addUser(response.profileObj);
        setName(name);
        setEmail(email);
        setPhoto(imageUrl);
        setGoogleId(googleId);

        if (googleId) {

            addToken(googleId);
            addUser({ name, email, imageUrl, googleId });

            history.push("/home");
        }
    };

    return {
        googleId,
        name,
        email,
        photo,
        responseGoogle,
    };
};
