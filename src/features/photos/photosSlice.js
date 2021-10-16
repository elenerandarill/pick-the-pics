import { createSlice , } from "@reduxjs/toolkit";
import Photo from "../../objects/photo";


/** @type {{photosFetched: Photo[]}} */
const initialState = {
    photosInFolder: [
        // new Photo("123", "url1"),
    ]
}

const photosSlice = createSlice(
    {
        name: 'photos',
        initialState,
        reducers: {
            savePhoto(state, action){
                // const photo = new Photo(
                //     action.payload.id,
                //     action.payload.urls.thumb)
                state.photosFetched.push(action.payload)
            }
            // clearPhotos ??
        }
    }
)

export const { savePhoto } = photosSlice.actions
export const selectFolderPhotos = (state) => state.photos.photosInFolder
export default photosSlice.reducer