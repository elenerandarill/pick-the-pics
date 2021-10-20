import React from 'react';
import {useGetPhotoByIdQuery} from "../features/api/unsplashApiSlice";

const DisplayPhoto = ({pId}) => {
    const { data, isError, isLoading } = useGetPhotoByIdQuery(pId)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error has occurred!</div>
    // console.log("data >>> ", data)

    return(
        <div key={pId}>
            <div className="pics-item">
            <img src={data.urls.thumb}
                 alt={data.description}
                 aria-label={data.description}
                 className="img-thumb"/>
            </div>
        </div>
    )
};

export default DisplayPhoto;