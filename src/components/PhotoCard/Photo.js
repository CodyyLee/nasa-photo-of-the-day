import React, {useState, useEffect} from 'react';
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function Photo() {
    const [photo, setPhoto] = useState("");
    useEffect(function() {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(function(response) {
        setPhoto(response.data.hdurl);
    }).catch(function(error) {
        console.log(error);
    })
    }, [])

    return (
        <div>
            <PhotoCard image={photo} />
        </div>
    )
}