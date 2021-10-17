import React from 'react';
import {useGetPhotoByIdQuery} from "../features/api/unsplashApiSlice";

const DisplayPhoto = ({pId}) => {
    console.log("////////fethPhoto by ID: ", pId)
    const { data, isError } = useGetPhotoByIdQuery(pId)

    if (isError) return <div>An error has occurred!</div>

    return(
        <div>
            <img src={data.results.urls.thumb}
                 alt={data.results.description}
                 aria-label={data.results.description}
                 className="img-thumb"/>
        </div>)
};

export default DisplayPhoto;