import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import Folder from "../objects/folder";

/**
 * @type {{foldersList: Folder[]}}
 */
const initialState = {
    foldersList: []
}

const foldersSlice = createSlice(
    {
        name: 'folders',
        initialState,
        reducers: {
            append(state, action){
            state.foldersList.append(action.payload)
            },
            remove(state, action){
                state.foldersList.splice(action.payload, 1)
            }
        }
    }
)

export const { append, remove } = foldersSlice.actions;
export default foldersSlice.reducer;