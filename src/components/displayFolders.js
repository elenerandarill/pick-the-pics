import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import {selectFolders, append, selectDisplayedFolder, setFolderToDisplay} from '../features/folders/foldersSlice'
import CreatingFolder from "./creatingFolder";

const DisplayFolders = () => {
    /** @type {Folder[]} */
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()
    /** @type {Folder} */
    const folderToDisplay = useSelector(selectDisplayedFolder)


    console.log("folderToDisplay: ", folderToDisplay)

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

                <div className="items-container">
                    {folders.map((folder) => {
                        return (
                            <div key={Math.random() * 10}
                                 className="folder m-3"
                                 onClick={() => {
                                     dispatch(setFolderToDisplay(folder))
                                     console.log("folderToDisplay after click: ", folderToDisplay)
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