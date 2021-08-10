import { css } from "styled-components";
import { WithStyled } from "../../Utils";

const style = ({ baseBorderRadius }) => css`
    background-color : #fff2;
    border-radius: ${baseBorderRadius}px;
    padding  : 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default WithStyled(style)