import { css } from "styled-components";
import { generateColor, WithStyled } from "../../../Utils";

const style = ({ primary , baseBorderRadius }) => css`
    width : 100%;
    margin-top: 2.5rem;
    padding : 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .badgeHeader {
        &__innerContainer {
            background-color: ${generateColor(primary , 2)};
            border-radius: ${baseBorderRadius}px;
            padding: 1rem;
        }
    }
`


export default WithStyled(style);