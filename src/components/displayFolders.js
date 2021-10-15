import React, {useState} from 'react';

const DisplayFolders = () => {
    const [folders, setFolders] = useState([
        {name: "favourites", pictures: ["#1", "#2"]},
        {name: "for later", pictures: ["#33", "#66"]},
        {name: "favourites2", pictures: ["#1", "#2"]},
        {name: "favourites3", pictures: ["#55"]},
        {name: "favourites4", pictures: ["#1", "#2"]},
        {name: "favourites5", pictures: []},
    ])

    return (
        <div className="center-folders">
            <div className="txt-small">welcome to</div>

            <h1>pick-the-pics</h1>

            {folders.length === 0
                ? <div>"create a new folder for your pictures"</div>
                : <div>your folders</div>}

            <div className="items-container">
                {folders.map((f) => {
                    return (
                        <div key={f.name.toString()} className="folder">
                            {f.name} ({f.pictures.length})
                        </div>
                    )
                })
                }
            </div>
            <div
                className="btn btn-outline-info"
                onClick={() => console.log("It will create new folder")}
            >
                + create folder
            </div>
        </div>
    );
};

export default DisplayFolders;