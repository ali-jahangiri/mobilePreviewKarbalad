import Wrapper from "./itemStyle";

const Svg = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline></svg>

const Slide = ({ backgroundColor = "", title = "", subTitle = "", image = "", webLink = "", webLinkLabel , sliderConfig }) => {
    
    return (
        <Wrapper passedStyle={{ backgroundColor , ...sliderConfig }}>
            <div className="slide__innerContainer">
                {
                    image && <img src={image} alt="passedImage" />
                }
                <p className="slide__title">{title}</p>
                <p className="slide__subTitle">{subTitle}</p>
                {
                    webLink && <div className="slide__webLink"><Svg /><p>{sliderConfig.webLinkLabel}</p></div>
                }
            </div>
        </Wrapper>
    )
}

export default Slide