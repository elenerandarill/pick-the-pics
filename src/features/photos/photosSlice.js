import { createSlice , } from "@reduxjs/toolkit";

/** @type {{photosFetched: Photo[]}} */
const initialState = {
    photosPicked: []
}

const photosSlice = createSlice(
    {
        name: 'photos',
        initialState,
        reducers: {
            togglePickedPhotos(state, action){
                const id = action.payload
                if (state.photosPicked.includes(id)){
                    const idx = state.photosPicked.indexOf(id)
                    state.photosPicked.splice(idx, 1)
                } else {
                    state.photosPicked.push(id)
                }
            },
            clearPickedPhotos(state){
                state.photosPicked = []
            }
        }
    }
)

export const { togglePickedPhotos, clearPickedPhotos, saveToFolder } = photosSlice.actions
export const selectPhotosPicked = (state) => state.photos.photosPicked
export default photosSlice.reducer