import React from 'react'
import './DeletePlace.css'

function DeletePlace({showDelete, closeViewDeleteFunc, deleteThePlaceFunc, closeOverlayViewDeleteFunc}) {
  return (
    
        <div className={`delete-popup-overlay ${showDelete ? 'active' : ''}`} onClick={closeOverlayViewDeleteFunc}>
            <div className="delete-popup-box">
                <h2>Are you sure?</h2>
                <p>This action cannot be undone. Deleting will permanently remove the item.</p>
                <div className="delete-popup-actions">
                <button className="delete-popup-cancel-btn" onClick={closeViewDeleteFunc}>Cancel</button>
                <button className="delete-popup-confirm-btn" onClick={deleteThePlaceFunc}>Delete</button>
                </div>
            </div>
        </div>


    
  )
}

export default DeletePlace