import React from 'react';
import {useSelector} from "react-redux";
import {selectDisplayedFolder} from "../features/folders/foldersSlice";
import DisplayPhoto from "./displayPhoto";

const ListFolder = () => {
    /** @type {Folder} */
    const folderToDisplay = useSelector(selectDisplayedFolder)

    console.log("[ ListFolder ] folderToDisplay = ", folderToDisplay)

    return (
        <div className="center-list-folder">
            <div className="imgs-container">
                {folderToDisplay
                && folderToDisplay.photos.map(photoId => {
                    return(
                        <DisplayPhoto pId={photoId}/>
                    )
                })}
            </div>
        </div>

    );
};

export default ListFolder;