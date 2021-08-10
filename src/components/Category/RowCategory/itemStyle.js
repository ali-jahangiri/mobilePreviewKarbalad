import { css, keyframes } from "styled-components";
import { WithStyled } from "../../../Utils";


const anime = keyframes`
    from {
        left : -50%;
    }
    to {
        left : 130%;
    }
`

const style = ({ primary , baseBorderRadius } , { _delay }) => css`
    height: 100px;
    background-color: ${primary};
    margin: 1rem 0;
    border-radius: ${baseBorderRadius}px;
    cursor : pointer;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        height : 200px;
        width : 50px;
        transform: rotate(40deg);
        background-color: #fff1;
        position: absolute;
        left: -50%;
        top: -50px;
        animation: ${anime} 3s ${_delay / 2.3}s forwards infinite;
    }
`


export default WithStyled(style)