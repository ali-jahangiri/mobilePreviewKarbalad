import styled, { keyframes } from "styled-components"

const anime = keyframes`
    from {
        transform : translateY(0);
    }
    to {
        transform : translateY(15px);
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex : 1;
    height : 100%;
    width : 100%;
    position: absolute;
    left: 0;
    top : 0;

    .loading__dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #171010;
        margin : 0 .3rem;
        animation: ${anime} .5s forwards alternate infinite;
    }
`;


const Loading = () => (
    <Wrapper>
            <div style={{ animationDelay : '0s' }} className='loading__dot'></div>
            <div style={{ animationDelay : '.5s' }} className='loading__dot'></div>
            <div style={{ animationDelay : '1s' }} className='loading__dot'></div>
    </Wrapper>
)


export default Loading