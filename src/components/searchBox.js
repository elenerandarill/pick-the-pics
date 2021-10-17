import React, {useState} from 'react';
import { useDispatch } from "react-redux"
import { setQuery } from "../features/unsplash/unsplashSearchSlice";
import { clearPickedPhotos } from "../features/photos/photosSlice";

const SearchBox = () => {
    const [userQuery, setUserQuery] = useState("")
    const dispatch = useDispatch()


    return (
        <div className="center-search">
            <div className="input-group">
                <div
                    className="input-group-text btn btn-outline-info"
                    id="searchQuery"
                    onClick={() => {
                        dispatch(clearPickedPhotos())
                        dispatch(setQuery(userQuery))
                    }
                    }
                >
                    search
                </div>

                <input type="text"
                       className="form-control"
                       aria-label="SearchingPhotos"
                       aria-describedby="searching-photos"
                       onChange={(e) => {
                           setUserQuery(e.target.value)
                       }}
                />
            </div>
        </div>
    );
};

export default SearchBox;