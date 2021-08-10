import styled from "styled-components";

const Wrapper = styled.div`
    padding : 15px;
`

const SimpleDirectory = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}


export default SimpleDirectory;