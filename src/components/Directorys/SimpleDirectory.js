import styled from "styled-components";

const Wrapper = styled.div`
    padding : 15px;
    height: 500px; 
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const SimpleDirectory = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}


export default SimpleDirectory;