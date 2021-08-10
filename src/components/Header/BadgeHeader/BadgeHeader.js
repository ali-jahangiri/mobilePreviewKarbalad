import Wrapper from "./style";

const BadgeHeader = ({ title }) => {
    return (
        <Wrapper>
            <div className="badgeHeader__innerContainer">
                <p>{title}</p>
            </div>
        </Wrapper>
    )
}


export default BadgeHeader;