import React, {useState} from 'react';

const SearchBox = () => {
    const [query, setQuery] = useState("")

    return (
        <div className="center-search">

            <div className="mb-3">
                <div className="input-group mb-3">
                    <div
                        className="input-group-text btn btn-outline-info"
                        id="query"
                        onClick={() => console.log("send request")}
                    >
                        search
                    </div>
                    <input type="text" className="form-control" aria-label="SearchingPhotos"
                           aria-describedby="searching-photos"/>
                </div>
            </div>

        </div>
    );
};

export default SearchBox;