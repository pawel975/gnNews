import { useTranslation } from "react-i18next";
import { formatTimestamp } from "../../helpers/formatTimestamp";
import {useState, useEffect} from "react";

const CurrentTimeViewer: React.FC = () => {

    const {t} = useTranslation();

    const [currentTime, setCurrentTime] = useState<string>("00:00:00");

    useEffect(() => {

        const timeFlowInterval = setInterval(() => {
            const currentTimestamp = formatTimestamp(new Date().getTime());
            setCurrentTime(currentTimestamp);
        }, 1000)

        return ()=>{
            clearInterval(timeFlowInterval)
        }
    }, [])

    return (
        <div className="current-time-viewer">
            <div>{t('footer.time')}: <span>{currentTime}</span></div>
        </div>
    )
}

export default CurrentTimeViewer;