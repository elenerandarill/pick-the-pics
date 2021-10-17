import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPhotosPicked, togglePickedPhotos} from "../features/photos/photosSlice";
import {useFetchSearchQuery} from "../features/api/unsplashApiSlice";
import {selectSearchQuery} from "../features/unsplash/unsplashSearchSlice";

const ResultsDisplay = () => {
    const photosPicked = useSelector(selectPhotosPicked)
    const query = useSelector(selectSearchQuery)
    const dispatch = useDispatch()


    const {data, isError, isLoading} = useFetchSearchQuery(query);
    // const { data = [], isFetching } = unsplashApiSlice.endpoints.fetchSearchedPhotos;

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error has occurred!</div>


    const togglePicked = (id) => {
        dispatch(togglePickedPhotos(id))
    }

    const isPicked = (id) => {
        if (photosPicked.includes(id)) {
            return "photo-thumbnail active-photo-picked"
        } else {
            return "photo-thumbnail"
        }
    }

    return (
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
    );
};

export default ResultsDisplay;