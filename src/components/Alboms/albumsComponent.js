import {useEffect, useState} from "react";
import {getAlbums} from "../../services";
import AlbumComponent from "./albumComponent";


function AlbumsComponent() {

    const [Albums, setAlbums] = useState([]);

    useEffect(()=>{

        getAlbums().then(value => setAlbums([...value]))

    },[])
    return (
        <div>

            {
                Albums.map(value => <AlbumComponent item={value} key={value.id}/>)
            }

        </div>
    );
}

export default AlbumsComponent;