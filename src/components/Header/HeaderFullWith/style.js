import { css } from "styled-components";

import { generateColor, WithStyled } from "../../../Utils"

const style = ({ primary , headerTitleColor }) => css`
    width : 100%;
    background-color: ${generateColor(primary , 9)};
    height : 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;
    color: ${headerTitleColor};
    padding : 4rem 15px 2.5rem 15px;
`
export default WithStyled(style)