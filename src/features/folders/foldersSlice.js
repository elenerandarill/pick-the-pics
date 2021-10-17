import { createSlice } from '@reduxjs/toolkit'

/** @type {{foldersList: Folder[]}} */
const initialState = {
    foldersList: [],
    chosenFolder: undefined,
    displayedFolder: undefined
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
            },
            setChosenFolder(state, action){
                // payload == folder's name
                state.chosenFolder = action.payload
            },
            // TODO znalezc gdzie jest to i moze przekazywac obj zamiast name???
            findFolderByName(state, action){
                const name = action.payload
                if (state.foldersList.length > 0){
                    return state.foldersList.filter(f => f.name === name)[0]
                }
            },
            saveToFolder(state, action){
                const photos = action.payload
                const folder = state.foldersList.filter(f => f.name === state.chosenFolder)[0]
                photos.map(photoId => {
                    if(!folder.photos.includes(photoId)){
                        folder.photos.push(photoId)
                    }
                })
            },
            setFolderToDisplay(state, action){
                // obj
                state.displayedFolder = action.payload
            }
        }
    }
)

export const { append, remove, setChosenFolder, findFolderByName, saveToFolder, setFolderToDisplay } = foldersSlice.actions
export const selectFolders = (state) => state.folders.foldersList
export const selectChosenFolder = (state) => state.folders.chosenFolder
export const selectDisplayedFolder = (state) => state.folders.displayedFolder
export default foldersSlice.reducer