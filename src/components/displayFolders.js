import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
    selectFolders,
    selectDisplayedFolder,
    setFolderToDisplay,
    getFolderListFromMemory
} from '../features/folders/foldersSlice'
import CreatingFolder from "./creatingFolder";

const DisplayFolders = () => {
    /** @type {Folder[]} */
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()
    /** @type {Folder} */
    const folderToDisplay = useSelector(selectDisplayedFolder)

    useEffect(() => {
        dispatch(getFolderListFromMemory())
    }, [])

    /** @param folder {Folder} */
    const toggleDisplay = (folder) => {
        if (folderToDisplay === folder){
            dispatch(setFolderToDisplay(undefined))
        } else {
            dispatch(setFolderToDisplay(folder))
        }
    }

    return (
        <>
            <div className="center-header">
                <div className="txt-small">welcome to</div>
                <div className="txt-title mb-2">pick-the-pics</div>
            </div>

            <div className="center-folders">

                {folders.length === 0
                    ? <div className="txt-small">[ no folders yet... ]</div>
                    : <div>your folders</div>}

                <div className="pics-container">
                    {folders.map((folder) => {
                        return (
                            <div key={folder.name}
                                 title="open/close"
                                 className={`m-3 folder${
                                     folderToDisplay === folder ? "-active" : "" 
                                 }`}
                                 onClick={() => {
                                     toggleDisplay(folder)
                                 }}
                            >
                                {`${folder.name} (${folder.photos.length})`}
                            </div>
                        )
                    })
                    }
                </div>

                <CreatingFolder/>
            </div>
        </>
    );
};

export default DisplayFolders;