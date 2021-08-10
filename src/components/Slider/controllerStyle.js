import { css } from "styled-components";
import { WithStyled } from "../../Utils";

const _position = {
    top : "5%",
    center : "50%",
    bottom : "95%"
}

const controllerStyle = (_ , { passedStyle }) => css`
    position: absolute;
    left: 5%;
    top: ${_position[passedStyle.controllerPosition]};
    z-index: 5555;
    transform: translate(-50% , -50%);
    padding: 1rem;
    cursor: pointer;
    background-color: ${passedStyle.controllerBgColor};

    svg {
        * {
            color: ${passedStyle.controllerColor};
        }
    }
`


export default WithStyled(controllerStyle);