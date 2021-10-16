import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { selectFolders, append } from '../features/foldersSlice'
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
        dispatch(append(folder))
    }

    return (
        <div className="center-folders">
            <div className="txt-small">welcome to</div>

            <h1>pick-the-pics</h1>

            {folders.length === 0
                ? <div>"create a new folder for your pictures"</div>
                : <div>your folders</div>}

            <div className="items-container">
                {folders.map((folder) => {
                    return (
                        <div key={Math.random() * 10} className="folder">
                            {`${folder.name} (${folder.photos.length})`}
                        </div>
                    )
                })
                }
            </div>
            <div
                className="btn btn-outline-info"
                onClick={() => appendFolder(new Folder("nowy", ["321"]))}
            >
                + create folder
            </div>
        </div>
    );
};

export default DisplayFolders;