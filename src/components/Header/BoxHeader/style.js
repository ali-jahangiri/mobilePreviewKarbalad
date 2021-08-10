import { css } from "styled-components";
import { WithStyled } from "../../../Utils";

const style = ({ primary , baseBorderRadius }) => css`
    background-color: ${primary};
    width : 90%;
    margin : 0 auto;
    margin-top: 2.5rem;
    border-radius: ${baseBorderRadius}px;
    padding : 20px;
`

export default WithStyled(style)