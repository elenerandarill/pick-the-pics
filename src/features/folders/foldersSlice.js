import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import Folder from "../../objects/folder";


/** @type {{foldersList: Folder[]}} */
const initialState = {
    foldersList: [
    ]
}

const foldersSlice = createSlice(
    {
        name: 'folders',
        initialState,
        reducers: {
            append(state, action){
                console.log("folder append action.payload: ", action.payload)
                state.foldersList.push(action.payload)
            },
            removeFolder(state, action){
                state.foldersList.splice(action.payload, 1)
            }
        }
    }
)

export const { append, remove } = foldersSlice.actions
export const selectFolders = (state) => state.folders.foldersList
export default foldersSlice.reducer