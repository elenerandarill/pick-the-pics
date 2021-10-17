import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosPicked} from "../features/photos/photosSlice";
import {selectFolders, selectChosenFolder, saveToFolder} from "../features/folders/foldersSlice";
import SelectDropdown from "./selectDropdown";
import ResultsDisplay from "./resultsDisplay";

const DisplaySearch = () => {
    const photosPicked = useSelector(selectPhotosPicked)
    const folders = useSelector(selectFolders)
    const chosenFolder = useSelector(selectChosenFolder)
    const dispatch = useDispatch()

    console.log("/////////photosPicked for rendering: ", photosPicked)
    console.log("/////////chosenFolder: ", chosenFolder)
    console.log("/////////folders for rendering: ", folders.length)


    const savePhotosToFolder = () => {
        console.log("folders: ", folders)
        console.log("chosenFolder: ", chosenFolder)

        let folder =  folders.filter(f => f.name === chosenFolder)[0]
        console.log("savePhotosToFolder - folder: ",folder )
        dispatch(saveToFolder(photosPicked))
    }

    return (
        <>
            <div className="center-save m-2">
                {photosPicked.length > 0
                &&
                <>
                    <div>{`chose folder to save your (${photosPicked.length}) pics`}</div>
                    <div className="save-folder-container">

                        <SelectDropdown/>

                        <div className="btn btn-outline-info m-2"
                             onClick={() => chosenFolder
                                 ? savePhotosToFolder()
                                 : console.log("Nie wybrano folderu")}
                        >
                            save
                        </div>
                    </div>
                </>
                }
            </div>

            {/*results display (data)*/}
            <ResultsDisplay/>
        </>
    );
};

export default DisplaySearch;