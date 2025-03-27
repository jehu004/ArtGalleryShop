import { useState } from "react";
import { artworks, openModal, closeModal } from "../scripts/shopScripts.js";
import "../styles/Shop.css";

const Shop = () => {
    const [selectedArt, setSelectedArt] = useState(null);

    return (
        <div>
            <main>
                <aside className="filter">
                    <h3>Filter by</h3>
                    <div>
                        <h4>Artist</h4>
                    </div>
                    <div>
                        <h4>Type</h4>
                    </div>
                    <div>
                        <h4>Price</h4>
                    </div>
                    <div>
                        <h4>Size</h4>
                        <label><input type="checkbox"/> Small</label>
                        <label><input type="checkbox"/> Medium</label>
                        <label><input type="checkbox"/> Large</label>
                    </div>
                </aside>
                
                <section className="artwork">
                    <h2>Artwork</h2>
                    <div className="grid">
                        {artworks.map((art, index) => (
                            <div className="item" key={index} onClick={() => openModal(art, setSelectedArt)}>
                                <img src={art.src} alt={art.title}/>
                                <p>{art.title}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            
            {selectedArt && (
                <div className="popup" onClick={() => closeModal(setSelectedArt)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => closeModal(setSelectedArt)}>&times;</span>
                        <img src={selectedArt.src} alt={selectedArt.title} />
                        <div className="modal-info">
                            <h1>{selectedArt.title}</h1>
                            <p>Unique work.<br/>Akrylic on canvas.</p>
                            <p><strong>kr {selectedArt.price}</strong></p>
                            <hr/>
                            <p><strong>Dimension</strong> <br/> {selectedArt.size}</p>
                            <hr/>
                            <p><strong>Year</strong> <br/> 2022</p>
                            <button className="btn">Buy now</button>
                            <button className="btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
