import { useRef } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import SliderController from './SliderController';


// export const _mockModel = {
//     showDot : true,
//     showArrow : true,
//     height : 100 , // from 0 - 1
//     width : 100, // from 50% - 100%
//     autoPlay : false,
//     autoPlayTime : 2500,
//     borderRadius : 0 , 
//     controllerColor : "black",
//     controllerBgColor : "white",
//     infinite : false,
//     webLinkLabel : "Link to web",
//     titleFontSize : 18,
//     subTitleFontSize : 14,
//     titleColor : "black",
//     subTitleColor : "grey",
//     imageBorderRadius : 0,
//     controllerPosition : "top" || 'center' || "bottom",
//     contentContainerXDirection : "top" || 'center' || "bottom",
//     contentContainerYDirection : "top" || 'center' || "bottom",
//     contentContainerPadding : 15,
//     webLinkTriggerPosition : 'left' || "center" || 'right',
// }

export const _mockModel = {
    showDot : true,
    showArrow : true,
    height : 100 , // from 0 - 1
    width : 100, // from 50% - 100%
    autoPlay : true,
    autoPlayTime : 5000,
    borderRadius : 0 , 
    controllerColor : "blue",
    controllerBgColor : "transparent",
    infinite : true,
    webLinkLabel : "Link to web",
    titleFontSize : 28,
    subTitleFontSize : 20,
    titleColor : "black",
    subTitleColor : "grey",
    imageBorderRadius : 0,
    controllerPosition : "top" || 'center' || "bottom",
    contentContainerXDirection : "center" || 'center' || "bottom",
    contentContainerYDirection : "center" || 'center' || "bottom",
    contentContainerPadding : 15,
    webLinkTriggerPosition : 'center' || "center" || 'right',
}



const _mockSlide = [{
    backgroundColor : "#FF3F00",
    title : "this is title" , 
    subTitle : "Cupiditate amet sint iure quos. Animi deserunt aliquid iusto sit totam eos. Quis vitae iure fugit expedita ab sunt vero voluptas. Iste possimus nesciunt voluptatibus iusto et dolore occaecati veniam. Eum optio qui non quisquam aspernatur ullam aut laboriosam.",
    image: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    webLink : "",
},
{
    backgroundColor : "",
    title : "other oen title" , 
    subTitle : "expedita ab sunt vero voluptas. Iste possimus nesciunt voluptatibus iusto et dolore occaecati veniam. Eum optio qui non quisquam aspernatur ullam aut ",
    image: "",
    webLink : "google.com",
},
{
    backgroundColor : "#39A2DB",
    title : "shit otheer title" , 
    subTitle : "atibus iusto et dolore occaecat",
    image: "",
    webLink : "",
},
{
    backgroundColor : "#DA0037",
    title : "other new titel with" , 
    subTitle : "",
    image: "",
    webLink : "",
},
{
    backgroundColor : "#362222",
    title : "asdsad" , 
    subTitle : "",
    image: "",
    webLink : "other text",
}]


const DynamicSlider = ({ data , style }) => {
    const config = {
        dots: false,
        infinite: _mockModel.infinite,
        autoplay : _mockModel.autoPlay,
        autoplaySpeed : _mockModel.autoPlayTime,
        slidesToScroll: 1,
        arrows : false,

    }


    const sliderRef = useRef();

    
    return (
        <div style={{ position : "relative", margin : "1rem 0"}}>
            {
                _mockModel.showArrow && <SliderController 
                                            nextHandler={() => sliderRef.current?.slickNext()} 
                                            prevHandler={() => sliderRef.current?.slickPrev()} 
                                            sliderConfig={_mockModel}
                                        />
            }
            <Slider ref={sliderRef} {...config}>
                {
                    _mockSlide.map((el , i) => <Slide key={i} {...el} sliderConfig={_mockModel} />)
                }
            </Slider>
        </div>
    )
}


export default DynamicSlider;