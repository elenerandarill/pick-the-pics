import {createSlice} from '@reduxjs/toolkit'

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
            /** @param action {Folder}*/
            append(state, action){
                // Folder, but Jsonified.
                state.foldersList.push(action.payload)
            },
            removeFolder(state, action){
                state.foldersList = state.foldersList.filter(
                    folder => folder.name !== action.payload.name
                )
            },
            setChosenFolder(state, action){
                // payload == folder's name
                state.chosenFolder = action.payload
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
            },
            getFolderListFromMemory(state){
                if (typeof(window) !== 'undefined') {
                    const saved = localStorage.getItem('appConfig')
                    if (saved !== "" && saved !== null){
                        state.foldersList = JSON.parse(saved)
                    }
                }
            },
            updateFolderListInMemory(state){
                if (typeof(window) !== 'undefined') {
                    localStorage.setItem('appConfig', JSON.stringify(state.foldersList))
                }
            }
        }
    }
)

export const { append, removeFolder, setChosenFolder, saveToFolder, setFolderToDisplay,
    getFolderListFromMemory, updateFolderListInMemory } = foldersSlice.actions
export const selectFolders = (state) => state.folders.foldersList
export const selectChosenFolder = (state) => state.folders.chosenFolder
export const selectDisplayedFolder = (state) => state.folders.displayedFolder
export default foldersSlice.reducer