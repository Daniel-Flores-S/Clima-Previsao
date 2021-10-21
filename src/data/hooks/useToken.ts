
import ContextLogin from "data/contexts/ContextLogin";
import { useContext } from "react";

export function useToken() {
    const value = useContext(ContextLogin);

    return value;
}
