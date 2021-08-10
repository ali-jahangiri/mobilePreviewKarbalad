import { css } from "styled-components";

import { WithStyled } from "../../../Utils"

const style = ({ primary }) => css`
    background-color : ${primary};
    height : 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 15px;

`

export default WithStyled(style)