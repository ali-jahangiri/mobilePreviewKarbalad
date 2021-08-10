import { useEffect } from "react";
import Wrapper from "./StatusbarStyle";

const StatusBar = () => {
    const min = new Date().getMinutes();
    const hour = new Date().getHours();

    // useEffect(() => {

    // } , [])

    return (
        <Wrapper>
            <div className='camera'></div>
            <div>{`${hour}:${min}`}</div>
        </Wrapper>
    )
}


export default StatusBar;