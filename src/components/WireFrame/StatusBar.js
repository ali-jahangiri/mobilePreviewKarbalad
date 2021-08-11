import { useEffect, useState } from "react";
import Wrapper from "./StatusbarStyle";

const StatusBar = () => {
    const [_, setForcer] = useState(null);

    const min = new Date().getMinutes();
    const hour = new Date().getHours();

    useEffect(() => {
        const timer = setInterval(() => {
            setForcer(Date.now())
        } , 60000);
        return () => clearInterval(timer);
    } , [])

    return (
        <Wrapper>
            <div className='camera'></div>
            <div>{`${hour}:${min < 10 ? `0${min}` : min}`}</div>
        </Wrapper>
    )
}


export default StatusBar;