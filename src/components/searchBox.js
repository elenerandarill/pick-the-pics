import React, {useState} from 'react';
import { useDispatch } from "react-redux"
import { setQuery } from "../features/unsplash/unsplashSearchSlice";
import { clearPickedPhotos } from "../features/photos/photosSlice";

const SearchBox = () => {
    const [userQuery, setUserQuery] = useState("")
    const dispatch = useDispatch()


    const handleKeyDown = (event) => {
        // console.log("Enter clicked inside")
        if (event.key === 'Enter') {
            dispatch(clearPickedPhotos())
            dispatch(setQuery(userQuery))
        }
    }

    return (
        <div className="center-search">
            <div className="input-group">
                <div
                    className="input-group-text btn btn-outline-info"
                    id="searchQuery"
                    onClick={() => {
                        dispatch(clearPickedPhotos())
                        dispatch(setQuery(userQuery))
                    }}
                >
                    search
                </div>

                <input type="text"
                       className="form-control"
                       aria-label="SearchingPhotos"
                       placeholder="give us a word..."
                       onKeyDown={(e) => {
                           handleKeyDown(e)
                       }}
                       onChange={(e) => {
                           setUserQuery(e.target.value)
                       }}
                />
            </div>
        </div>
    );
};

export default SearchBox;