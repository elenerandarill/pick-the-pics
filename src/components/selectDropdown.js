import React from 'react';
import {selectChosenFolder, selectFolders, setChosenFolder} from "../features/folders/foldersSlice";
import {useDispatch, useSelector} from "react-redux";

const SelectDropdown = () => {
    const chosenFolder = useSelector(selectChosenFolder)
    const folders = useSelector(selectFolders)
    const dispatch = useDispatch()


    return (
        <select value={chosenFolder}
                className="form-select m-2"
                onChange={(e)=> {
                    console.log("e: ", e.target.value)
                    dispatch(setChosenFolder(e.target.value))
                }}
        >
            <option disabled selected value>Wybierz</option>
            {folders.map(f => <option value={f.name}>{f.name}</option>)}
        </select>
    );
};

export default SelectDropdown;