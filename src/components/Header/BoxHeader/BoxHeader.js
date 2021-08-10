import Wrapper from "./style";

const BoxHeader = ({ title , ...rest }) => {
    console.log(rest);
    return (
        <Wrapper>
            <p>{title}</p>
        </Wrapper>
    )
}


export default BoxHeader;