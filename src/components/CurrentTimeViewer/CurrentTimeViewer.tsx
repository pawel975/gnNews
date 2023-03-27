import { formatTimestamp } from "../../helpers/formatTimestamp";
import {useState, useEffect} from "react";

const CurrentTimeViewer: React.FC = () => {

    const [currentTime, setCurrentTime] = useState<string>("00:00:00");

    useEffect(() => {

        const timeFlowInterval = setInterval(() => {
            const currentTimestamp = formatTimestamp(new Date().getTime());
            setCurrentTime(currentTimestamp as string);
        }, 1000)

        return ()=>{
            clearInterval(timeFlowInterval)
        }
    }, [])

    return (
        <div className="current-time-viewer">
            <div>Time: <span>{currentTime}</span></div>
        </div>
    )
}

export default CurrentTimeViewer;