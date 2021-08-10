import styled from "styled-components";

const Wrapper = styled.div`
    padding : 15px;
    margin-top: -40px;
    border-top-left-radius: 15px;
    border-top-right-radius : 15px;
    background-color: white;
    height: 500px; 
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

const NegativeDirectory = ({ children }) => <Wrapper>{children}</Wrapper>


export default NegativeDirectory;