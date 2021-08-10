import { css } from "styled-components";
import { WithStyled } from "../../../Utils";

const style = ({ primary }) => css`
    width : 100%;
    background: linear-gradient(180deg , ${primary}, transparent);
    height : 120px;
    padding : 15px;
    padding-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export default WithStyled(style);