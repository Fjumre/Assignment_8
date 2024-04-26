import React, { useEffect, useState } from 'react';
import MapSVG from './SvgComponent.jsx'; 
import axios from 'axios'; 


function MapComponent() {
    const [currentCountryCode, setCurrentCountryCode] = useState(null);
    const [countryData, setCountryData] = useState({});

    const handleMapClick = (event) => {
       
        if (event.target.id) {
            console.log("Country clicked:", event.target.id);
            setCurrentCountryCode(event.target.id);
            event.target.style.fill = "green";

           
        }
    };
    useEffect(() => {
        if (currentCountryCode) {
          
            axios.get(`${currentCountryCode}`)
                .then(response => {
                    setCountryData(response.data);
                    console.log('Data fetched for country:', currentCountryCode, response.data);
                })
                .catch(error => console.error('Error fetching country data:', error));
        }
    }, [currentCountryCode]);

    return (
        
        <div id="svg2" onClick={handleMapClick}>
            <MapSVG />
        </div>
    );
}

export default MapComponent;

