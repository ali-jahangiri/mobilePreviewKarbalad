import { css } from "styled-components";
import { WithStyled } from "../../Utils";

const style = () => css`
    position: relative;
    
    .directoryContainer__overlay {
        position: absolute;
        top : 0;
        width : 100%;
        height : 100%;
        background: linear-gradient(0, white, #ffffff82);
        border-radius: 15px 15px 0 0;
    }
`


export default WithStyled(style)