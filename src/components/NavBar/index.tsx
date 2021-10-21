import { useToken } from "data/hooks/useToken";

import {
    DiagonalPart1,
    DiagonalPart2,
    HeaderContainer,
    Horizontal,
    InputChecked,
    SidebarIconToggle,
    SidebarMenu,
    SidebarMenuInner,
} from "./styles";

export const NavBarComponent = () => {
    const { user, addToken } = useToken();

    function handleLogout() {
        addToken("");
    }

    return (
        <>
            <HeaderContainer>
                <img src={user?.imageUrl} alt="Temperatura" />
            </HeaderContainer>
            <InputChecked type="checkbox" id="openSidebarMenu" />

            <SidebarIconToggle htmlFor="openSidebarMenu">
                <DiagonalPart1></DiagonalPart1>
                <Horizontal></Horizontal>
                <DiagonalPart2></DiagonalPart2>
            </SidebarIconToggle>
            <SidebarMenu id="sidebarMenu">
                <SidebarMenuInner>
                    <li>
                        {user?.name}
                        <span></span>
                    </li>
                    <li>
                        <span> {user?.email} </span>
                    </li>
                    <li>
                        <a href="#" onClick={() => {
                            handleLogout();
                        }}>Sair</a>
                    </li>
                </SidebarMenuInner>
            </SidebarMenu>
        </>
    );
};
