import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import Folder from "../objects/folder";

/**
 * @type {{foldersList: Folder[]}}
 */
const initialState = {
    foldersList: [
           new Folder("favourites", ["#1", "#2"]),
           new Folder("favourites2", ["#11", "#22"]),
           new Folder("favourites3", ["#21"]),
           new Folder("favourites4", []),
           new Folder("for later", []),
    ]
}

const foldersSlice = createSlice(
    {
        name: 'folders',
        initialState,
        reducers: {
            append(state, action){
                state.foldersList.push(action.payload)
            },
            remove(state, action){
                state.foldersList.splice(action.payload, 1)
            }
        }
    }
)

export const { append, remove } = foldersSlice.actions;
export const selectFolders = (state) => state.folders.foldersList;
export default foldersSlice.reducer;