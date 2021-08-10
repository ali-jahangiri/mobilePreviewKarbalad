import { css } from "styled-components";
import { generateColor, WithStyled } from "../../Utils";

const _webLinkPosition = {
    left : "flex-start",
    center : "center",
    right : "flex-end"
}

const _contentContainerDirection = {
    top : "flex-start",
    center : 'center',
    bottom : 'flex-end'
}


const style = ({ primary , baseBorderRadius } , { passedStyle }) => css`
    background-color: ${passedStyle.backgroundColor || generateColor(primary , 5)};
    cursor: pointer;
    height : ${600 * (passedStyle.height / 100)}px;
    border-radius: ${passedStyle.borderRadius}px;
    width : ${passedStyle.width}%;
    margin: 0 auto;

    img {
        width : 50%;
        border-radius: ${passedStyle.imageBorderRadius || baseBorderRadius}px;
        margin-bottom: 10px;
    }

    .slide {
        &__innerContainer {
            padding: ${passedStyle.contentContainerPadding}px;
            display: flex;
            flex-direction: column;
            align-items: ${_contentContainerDirection[passedStyle.contentContainerXDirection]};
            justify-content: ${_contentContainerDirection[passedStyle.contentContainerYDirection]};
            height : 100%;
        }


        &__title {
            font-size: ${passedStyle.titleFontSize}px;
            color: ${passedStyle.titleColor};
        }

        &__subTitle {
            color: ${passedStyle.subTitleColor};
            font-size: ${passedStyle.subTitleFontSize}px;
        }
        
        
        &__webLink {
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: ${_webLinkPosition[passedStyle.webLinkTriggerPosition]};
            margin : .5rem 0;
            width: 100%;
            p {
                margin-left: .5rem;
            }
        }
    }
`

export default WithStyled(style);