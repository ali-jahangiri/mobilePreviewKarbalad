import { useContext } from "react";
import styled from "styled-components/macro";
import { StyleContext } from "../Provider/styleProvider/StyleProvider";

const InnerComponent = ({ style , children , ...rest }) => {
    const { style : globalStyle } = useContext(StyleContext);
    return (
        <div css={style(globalStyle)} {...rest}>{children}</div>
    )
}

const WithStyled = css => ({ children , ...rest }) => <InnerComponent style={css} children={children} {...rest} />


export default WithStyled;