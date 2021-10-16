import React from 'react';
import SearchBox from "./searchBox";
import { useFetchSearchQuery, getFetchPhotoByIdQuery} from "../features/unsplash/unsplashApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {savePhoto, selectFolderPhotos} from "../features/photos/photosSlice";

const DisplayPhotos = () => {
    // const folderPhotos = useSelector(selectFolderPhotos)
    const dispatch = useDispatch()


    const { data = [], isError, isLoading, isFetching } = useFetchSearchQuery();
    // const { data = [], isFetching } = unsplashApiSlice.endpoints.fetchSearchedPhotos;

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>An error has occurred!</div>

    console.log("/////////isFetching ", isFetching)


    const appendToSearchedPhotos = (data) => {
        data.results.map(photoObj => dispatch(savePhoto(photoObj)))
    }

    return (
        <>
            <SearchBox/>

            <div className="center-results">
                <div className="mb-2">
                    {data.results.length === 0
                        ? "type above what you want to search for"
                        : "and here is what we found..."}
                </div>

                <div className="imgs-container">

                    {data.results.map((photo) => {
                            return (
                                <div
                                    key={photo.id}
                                    className="photo-thumbnail"
                                    onClick={() => console.log("zapisano")
                                }>
                                    <img src={photo.urls.thumb} alt={photo.description} className="img-thumb"/>
                                    <div className="text-overlay">
                                        <div className="save-photo">save</div>
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

export default DisplayPhotos;