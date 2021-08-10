import Controller from "./controllerStyle";

const LeftSvg = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" ><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
const RightSvg = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>

const SliderController = ({ sliderConfig , nextHandler , prevHandler }) => {
    return (
        <>
            <Controller onClick={prevHandler} id='fuck' passedStyle={sliderConfig} >
                <LeftSvg />
            </Controller>
            <Controller onClick={nextHandler} style={{ left : "95%" }} passedStyle={sliderConfig} >
                <RightSvg />
            </Controller>
        </>
    )
}


export default SliderController;