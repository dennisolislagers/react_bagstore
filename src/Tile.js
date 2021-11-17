import React from 'react';

function Tile ({image, title, text}) {
    return(
        <footer>
            <section className="tile">
                <img src={image} alt=""/>
                <h2 className="title-name">{title}</h2>
                <p className="text-name">{text}</p>
            </section>
        </footer>
    );
}

export default Tile;