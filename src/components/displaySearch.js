import React from 'react';
import {useFetchSearchQuery} from "../features/api/unsplashApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosPicked, togglePickedPhotos} from "../features/photos/photosSlice";
import {selectFolders, selectChosenFolder, saveToFolder} from "../features/folders/foldersSlice";
import {selectSearchQuery} from "../features/unsplash/unsplashSearchSlice";
import {setChosenFolder} from "../features/folders/foldersSlice";

const DisplaySearch = () => {
    const photosPicked = useSelector(selectPhotosPicked)
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()
    const query = useSelector(selectSearchQuery)
    const chosenFolder = useSelector(selectChosenFolder)


    const { data = [], isError, isLoading } = useFetchSearchQuery(query);
    // const { data = [], isFetching } = unsplashApiSlice.endpoints.fetchSearchedPhotos;

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error has occurred!</div>

    const togglePicked = (id) => {
        dispatch(togglePickedPhotos(id))
    }

    console.log("/////////photosPicked for rendering: ", photosPicked)
    console.log("/////////chosenFolder: ", chosenFolder)
    console.log("/////////folders for rendering: ", folders.length)

    const isPicked = (id) => {
        if (photosPicked.includes(id)){
            return "photo-thumbnail active-photo-picked"
        } else {
            return "photo-thumbnail"
        }
    }

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
                        <select value={chosenFolder}
                                className="form-select m-2"
                                onChange={(e)=> {
                                    console.log("e: ", e.target.value)
                                    dispatch(setChosenFolder(e.target.value))
                                }}
                        >
                            <option disabled selected value>Wybierz</option>
                            {folders.map(f => <option value={f.name}>{f.name}</option>)}
                        </select>
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

            <div className="center-results">
                <div className="mb-2">
                    {data.results.length > 0
                        && <div className="txt-blue m-2">and here is what we found for you</div>}
                </div>


                <div className="imgs-container">

                    {data.results.map((photo) => {
                            return (
                                <div key={photo.id}
                                     className={isPicked(photo.id)}
                                     onClick={() => togglePicked(photo.id)}>

                                    <img src={photo.urls.thumb}
                                         alt={photo.description}
                                         aria-label={photo.description}
                                         className="img-thumb"/>

                                    <div className="text-overlay">
                                        <div className="save-photo">pick</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default DisplaySearch;