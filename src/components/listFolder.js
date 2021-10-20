import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    removeFolder,
    selectDisplayedFolder,
    setFolderToDisplay,
    updateFolderListInMemory
} from "../features/folders/foldersSlice";
import DisplayPhoto from "./displayPhoto";

const ListFolder = () => {
    /** @type {Folder} */
    const folderToDisplay = useSelector(selectDisplayedFolder)
    const dispatch = useDispatch()

    // console.log("[ ListFolder ] folderToDisplay = ", folderToDisplay)

    return (
        <div className="center-list-folder mb-3">
            <div className="imgs-container">
                {folderToDisplay
                && folderToDisplay.photos.map(photoId => {
                    return(
                        <div key={photoId}>
                            <DisplayPhoto pId={photoId}/>
                        </div>
                    )
                })}
            </div>
            {folderToDisplay
            && <div className="mt-1 mb-3 btn btn-outline-danger"
                    onClick={() => {
                        dispatch(removeFolder(folderToDisplay))
                        dispatch(updateFolderListInMemory())
                        dispatch(setFolderToDisplay())
                    }}
            >
                - delete folder
            </div>}
        </div>

    );
};

export default ListFolder;