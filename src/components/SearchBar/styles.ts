import styled from "styled-components";

export const SearchSection = styled.form``;
export const CastHeader = styled.div`
    font-family: opensans, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 0;
`;

export const HeaderTitle = styled.p`
    color: #666;
    font-size: 1rem;
    letter-spacing: -0.025rem;
    line-height: 1.38;
    text-align: center;
    text-transform: capitalize;

    @media (min-width: 38.75em) {
        & {
            font-size: 1.25rem;
            letter-spacing: -0.05625rem;
            line-height: initial;
        }
    }
`;
export const HeaderSubtitle = styled(HeaderTitle)`
    color: #333;
    font-family: opensans, "Helvetica Neue", Arial, sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.075rem;
    margin-bottom: 1rem;
    text-align: center;

    @media (min-width: 38.75em) {
        & {
            font-size: 2.25rem;
            line-height: 1.11;
            letter-spacing: -0.15625rem;
        }
    }
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;

export const SearchTerm = styled.input.attrs({ type: "text" })`
    width: 100%;
    height: 35px;
    border: 3px solid #00b4cc;
    border-right: none;

    padding: 5px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;

    &:focus {
        color: #00b4cc;
    }
`;

export const SearchButton = styled.button`
    width: 40px;
    height: 36px;
    border: 1px solid #00b4cc;
    background: #00b4cc;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
`;

/*Resize the wrap to see the search bar change!*/
export const Wrap = styled.form`
    width: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`;
