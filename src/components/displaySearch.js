import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosPicked} from "../features/photos/photosSlice";
import {
    selectFolders,
    selectChosenFolder,
    saveToFolder,
    updateFolderListInMemory
} from "../features/folders/foldersSlice";
import SelectDropdown from "./selectDropdown";
import ResultsDisplay from "./resultsDisplay";
import {toast} from "react-toastify"


const DisplaySearch = () => {
    const photosPicked = useSelector(selectPhotosPicked)
    const folders = useSelector(selectFolders)
    const chosenFolder = useSelector(selectChosenFolder)
    const dispatch = useDispatch()

    // console.log("/////////photosPicked for rendering: ", photosPicked)
    // console.log("/////////chosenFolder: ", chosenFolder)
    // console.log("/////////folders for rendering: ", folders.length)


    const savePhotosToFolder = () => {
        dispatch(saveToFolder(photosPicked))
        toast.success("Pictures saved!");
    }

    return (
        <>
            <div className="center-save m-2 sticky">
                {photosPicked.length > 0
                &&
                <>
                    <div>{`chose folder to save your (${photosPicked.length}) pics`}</div>
                    <div className="save-folder-container">

                        <SelectDropdown/>

                        <div className="btn btn-outline-info m-2"
                             title="save selection to folder"
                             onClick={() => {
                                 chosenFolder
                                     ? savePhotosToFolder()
                                     : toast.error("Pick the folder")
                                 dispatch(updateFolderListInMemory())
                             }
                             }
                        >
                            save
                        </div>
                    </div>
                </>
                }
            </div>

            <ResultsDisplay/>
        </>
    );
};

export default DisplaySearch;