import React, {useState} from 'react';
import xsquare from "../media/x-square.svg";
import Folder from "../objects/folder";
import {append, selectFolders} from "../features/folders/foldersSlice";
import {useDispatch, useSelector} from "react-redux";

const CreatingFolder = () => {
    /** @type {Folder[]} */
    const folders = useSelector(selectFolders)
    const [addingFolder, setAddingFolder] = useState(false)
    /** @type {string} */
    const [folderName, setFolderName] = useState(undefined)
    // const folders = useSelector((state) => state.folders.foldersList)
    const dispatch = useDispatch()

    const isFolderNew = (name) => {
        for (const f of folders){
            if (f.name === name){
                return false
            }
        }
        return true
    }

    const appendFolder = (name) => {
        if (!name){
            return alert("enter a name")
        }
        setAddingFolder(true)
        if (!isFolderNew(name)){
            return alert("name must be unique")
        }
        const folder = new Folder(name, [])
        // class-object has to be changed to js-object > {...object}
        dispatch(append({...folder}))
        setFolderName("")
        setAddingFolder(false)
    }

    return (
        <div>
            {!addingFolder
                ? <div
                    className="btn btn-outline-info mt-2"
                    onClick={() => setAddingFolder(true)}
                >
                    + create folder
                </div>

                : <div className="create-folder-container">
                    <div className="input-group">
                        <div
                            className="input-group-text btn btn-outline-info"
                            id="createFolder"
                            onClick={() => appendFolder(folderName)}
                        >
                            create
                        </div>

                        <input type="text"
                               className="form-control"
                               aria-label="theFolderName"
                               placeholder="folder's name"
                               onChange={(e) => {
                                   setFolderName(e.target.value)
                               }}
                        />
                    </div>
                    <img src={xsquare}
                         alt="cancel"
                         className="icon-cancel"
                         onClick={() => setAddingFolder(false)}/>
                </div>
            }
        </div>
    )
};

export default CreatingFolder;