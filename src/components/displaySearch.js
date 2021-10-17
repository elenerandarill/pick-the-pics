import React from 'react';
import {useFetchSearchQuery, getFetchPhotoByIdQuery} from "../features/api/unsplashApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosPicked, togglePickedPhotos} from "../features/photos/photosSlice";
import {selectFolders} from "../features/folders/foldersSlice";
import {selectSearchQuery} from "../features/unsplash/unsplashSearchSlice";


const DisplaySearch = () => {
    const photosPicked = useSelector(selectPhotosPicked)
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()
    const query = useSelector(selectSearchQuery)


    const {data = [], isError, isLoading, isFetching} = useFetchSearchQuery(query);
    // const { data = [], isFetching } = unsplashApiSlice.endpoints.fetchSearchedPhotos;

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error has occurred!</div>

    const togglePicked = (id) => {
        // console.log("/////////photosPicked: ", photosPicked)
        dispatch(togglePickedPhotos(id))
    }

    console.log("/////////photosPicked for rendering: ", photosPicked)
    console.log("/////////folders for rendering: ", folders.length)

    return (
        <>
            <div className="center-save m-2">
                {(photosPicked.length > 0 && folders.length === 0)
                    ? <div>
                        {`chose folder to save your (${photosPicked.length}) pics`}
                    </div>
                    : ""
                }
            </div>

            <div className="center-results">
                <div className="mb-2">
                    {data.results.length === 0
                        ? "type above what you want to search for"
                        : <div className="txt-blue m-2">and here is what we found for you</div>}
                </div>


                <div className="imgs-container">

                    {data.results.map((photo) => {
                            return (
                                <div key={photo.id}
                                     className="photo-thumbnail"
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