import { css } from "styled-components";
import { WithStyled } from "../../Utils";

const style = ({ baseBorderRadius } , { extendStyle }) => css`
    background-color : ${false || '#fff2'};
    border-radius: ${baseBorderRadius}px;
    padding  : 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* ${extendStyle} */
`


export default WithStyled(style)