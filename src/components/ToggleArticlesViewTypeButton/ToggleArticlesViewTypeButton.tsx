import {BsCardList as ListIcon, BsFillGrid3X3GapFill as GridIcon} from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./ToggleArticlesViewTypeButton.css";
import { toggleViewType } from "../../redux/slices/articlesViewTypeSlice";

const ToggleArticlesViewTypeButton: React.FC = () => {

    const dispatch = useAppDispatch();
    const viewType = useAppSelector(state => state.articlesViewType.type);

    const viewTypeIcon = viewType === "list" ? <ListIcon/> : <GridIcon/>

    const handleArticlesViewTypeChange = () => {
        dispatch(toggleViewType());
    }

    return (
        <button 
            className="toggle-articles-view-type-button"
            onClick={handleArticlesViewTypeChange}
        >
            {viewTypeIcon}
        </button>
    )
}

export default ToggleArticlesViewTypeButton;