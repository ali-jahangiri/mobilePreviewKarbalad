import styled from "styled-components";

const Wrapper = styled.div`
    height : 15px;
    padding : 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    position: absolute;
    width : 100%;
    top: 0;
    left: 0;
    padding-top: .8rem;
    
    .camera {
        width: 1.2rem;
        height : 1.2rem;
        background-color: #171010;
        border-radius: 50%;
    }
`


export default Wrapper;