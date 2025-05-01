import React from 'react'

function MapEmbed({location}) {
    const mapSrc = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;

    return (
      <div style={{ width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe
          title="Google Map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
}

export default MapEmbed