import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findFolderByName, selectChosenFolder, selectDisplayedFolder, setFolderToDisplay} from "../features/folders/foldersSlice";
import DisplayPhoto from "./displayPhoto";

const ListFolder = () => {
    /** @type {Folder} */
    const folderToDisplay = useSelector(selectDisplayedFolder)
    const dispatch = useDispatch()
    // returns object {name, [ids]}
    // const folder = dispatch(findFolderByName(folderName))

    return (
        <div className="center-list-folder">
            <div className="imgs-container">
                {folderToDisplay
                && folderToDisplay.photos.map(photoId => {
                    return(
                        <div className="folder">
                            {photoId}
                        </div>
                    )
                    // return <DisplayPhoto id={photoId}/>
                })}
            </div>
        </div>

    );
};

export default ListFolder;