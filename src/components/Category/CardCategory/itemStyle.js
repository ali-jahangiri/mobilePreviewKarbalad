import { css, keyframes } from "styled-components";
import { WithStyled } from "../../../Utils"

const anime = keyframes`
    from {
        top : -50%;
    }
    to {
        top : 130%;
    }
`

const style = ({ primary , baseBorderRadius }) => css`
    width : 85px;
    height : 120px;
    background-color: ${primary} ;
    border-radius: ${baseBorderRadius}px;
    margin: 1rem 0;
    cursor: pointer;
    z-index: 5;
    position: relative;
    overflow: hidden;
    &::after {
        content: "";
        width : 150%;
        height : 25px;
        background-color: #fff1;
        opacity: 0.5;
        position: absolute;
        left: -10px;
        transform: rotate(26deg);
        animation: ${anime} 3s .3s forwards infinite;
    }

`

export default WithStyled(style)