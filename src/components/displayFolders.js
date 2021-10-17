import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { selectFolders, append } from '../features/folders/foldersSlice'
import Folder from "../objects/folder";
import xsquare from "../media/x-square.svg"

const DisplayFolders = () => {
    const [addingFolder, setAddingFolder] = useState(false)
    /** @type {string} */
    const [folderName, setFolderName] = useState(undefined)
    // const folders = useSelector((state) => state.folders.foldersList)
    /** @type {Folder[]} */
    const folders = useSelector(selectFolders)
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

                {addingFolder &&
                <div className="create-folder-container">
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

                {!addingFolder &&
                <div
                    className="btn btn-outline-info mt-2"
                    onClick={() => setAddingFolder(true)}
                >
                    + create folder
                </div>
                }
            </div>
        </>
    );
};

export default DisplayFolders;