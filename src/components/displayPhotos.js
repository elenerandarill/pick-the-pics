import React, {useState} from 'react';
import SearchBox from "./searchBox";
import Photo from "../objects/photo";
import {
    useFetchSearchQuery,
    getFetchPhotoByIdQuery,
    unsplashApiSlice
} from "../features/unsplash/unsplashApiSlice";

const DisplayPhotos = () => {
    const [searchResults, setSearchResults] = useState([
        new Photo("123", "url1"),
        new Photo("133", "url2"),
        new Photo("148", "url3"),
        new Photo("234", "url4"),
    ])

    const { data, isFetching } = useFetchSearchQuery();
    // const { data = [], isFetching } = unsplashApiSlice.endpoints.fetchSearchedPhotos;

    console.log("isFetching ", isFetching)

    return (
        <>
            <SearchBox/>

            <div className="center-results">
                <div className="mb-2">
                    {searchResults.length === 0
                        ? "type above what you want to search for"
                        : "and here is what we found..."}
                </div>

                <p>///////////////Received data.length {data ? data.results.length : 0}</p>

                <div className="items-container">

                    {searchResults.map((photo) => {
                            return (
                                <div key={Math.random() * 10} className="photo-thumbnail">
                                    {photo.id}{photo.url}
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