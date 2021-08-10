import { useContext } from "react";
import styled from "styled-components/macro";
import { StyleContext } from "../Provider/styleProvider/StyleProvider";

const InnerComponent = ({ _style , children , ...rest }) => {
    const { style : globalStyle } = useContext(StyleContext);

    return (
        <div css={_style(globalStyle , rest)} {...rest}>{children}</div>
    )
}

const WithStyled = css => ({ children , ...rest }) => <InnerComponent _style={css} children={children} {...rest} />


export default WithStyled;