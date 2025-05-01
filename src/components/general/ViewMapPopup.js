import React from 'react'
import './ViewMapPopup.css'
import MapEmbed from './MapEmbed'

function ViewMapPopup({showMap, closeViewMapFunc, closeOverlayViewMapFunc, placeName, location}) {
  return (
    <div>
        <div className={`popup-overlay ${showMap ? 'active' : ''}`} onClick={closeOverlayViewMapFunc}>
        <div className="popup-content">
            <h2>{placeName}</h2>
            {/* <p>This is the content inside the popup window.</p> */}
            <MapEmbed location={location}/>
            <button className="close-btn" onClick={closeViewMapFunc}>Close</button>
        </div>
        </div>
    </div>
  )
}

export default ViewMapPopup