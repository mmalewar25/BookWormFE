import React,  { useState, useEffect }  from "react";

function Cardpg2() {
    const listings = [
        {
            name: 'eBook',
            url: 'images/home1.jpg',
            price: 100,
            summary: 'summary 1',
        },
        {
            name: 'Music',
            url: 'images/home2.jpg',
            price: 200,
            summary: 'summary 2',
        },
        {
            name: 'Video',
            url: 'images/home3.jpg',
            price: 300,
            summary: 'summary 3',
        },
    ];

    return (
        <div className='container'>
            <div className='row'>
                {listings.map((listing, index) => (
                    <div
                        key={index}
                        className='col-md-4 col-sm-6'
                        style={{
                            marginBottom: '20px',
                        }}
                    >
                        <div className='card' style={{ cursor: 'pointer' }}>
                            <img
                                style={{ height: '200px', objectFit: 'cover', borderTop: '10px solid white' }}
                                src={listing.url} // Use listing.url instead of a fixed URL
                                alt={listing.name}
                                className='card-img-top'
                            />
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{listing.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Price: ${listing.price}</h6>
                                    <p className="card-text">{listing.summary}</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cardpg2;