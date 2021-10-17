import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { selectFolders, append } from '../features/folders/foldersSlice'
import Folder from "../objects/folder";

const DisplayFolders = () => {
    // const folders = useSelector((state) => state.folders.foldersList)
    /** @type {Folder[]} */
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()

    console.log("///////folders ", folders)

    /**
     * Append Folder to a list of Folders
     * @param folder {Folder}
     */
    const appendFolder = (folder) => {
        // class-object has to be changed to js-object > {...object}
        dispatch(append({...folder}))
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

                <div className="items-container">
                    {folders.map((folder) => {
                        return (
                            <div key={Math.random() * 10} className="folder m-3">
                                {`${folder.name} (${folder.photos.length})`}
                            </div>
                        )
                    })
                    }
                </div>
                <div
                    className="btn btn-outline-info mt-2"
                    onClick={() => appendFolder(new Folder("nowy", ["321"]))}
                >
                    + create folder
                </div>
            </div>
        </>
    );
};

export default DisplayFolders;