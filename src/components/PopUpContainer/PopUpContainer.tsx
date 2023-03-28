import { ReactNode } from "react";
import './PopUpContainer.css';

interface PopUpContainerProps {
    PopUpContent: ReactNode
    onClose: Function,
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({PopUpContent, onClose}) => {
    return (
        <div className="pop-up-container" onClick={() => onClose()}>
            <section className="pop-up-container__modal" onClick={e => e.stopPropagation()}>
                {PopUpContent}
            </section>
        </div>
    )
}

export default PopUpContainer;