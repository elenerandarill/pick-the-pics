import React, {useState} from 'react';
import SearchBox from "./searchBox";

const DisplayPhotos = () => {
    const [searchResults, setSearchResults] = useState([
        "123",
        "124",
        "125",
        "128"
    ])

    return (
        <>
            <SearchBox/>

            <div className="center-results">
                <div className="mb-2">
                    {searchResults.length === 0
                        ? "type above what you want to search for"
                        : "and here is what we found..."}
                </div>

                <div className="items-container">
                    {searchResults.map((r) => {
                            return (
                                <div className="photo-thumbnail">
                                    {r}
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