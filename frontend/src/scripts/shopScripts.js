export const artworks = [
    { src: "/images/Shop1.jpeg", title: "Som vann og luft II", price: "8000,00", size: "30x30 cm (Small)" },
    { src: "/images/Shop2.jpeg", title: "Skygge", price: "7500,00", size: "40x40 cm (Medium)" },
    { src: "/images/Shop3.jpeg", title: "Vertikal flyt", price: "8500,00", size: "50x50 cm (Large)" },
    { src: "/images/Shop4.jpg", title: "Mellom Brun og Ross 1", price: "9000,00", size: "60x60 cm (Large)" },
    { src: "/images/Shop4.jpg", title: "Mellom Brun og Ross 1", price: "9000,00", size: "60x60 cm (Large)" },
    { src: "/images/Shop4.jpg", title: "Mellom Brun og Ross 1", price: "9000,00", size: "60x60 cm (Large)" },
    { src: "/images/Shop4.jpg", title: "Mellom Brun og Ross 1", price: "9000,00", size: "60x60 cm (Large)" }
  ];
  
  
  export const openModal = (art, setSelectedArt) => {
    console.log("Opening modal for:", art.title);  
    setSelectedArt(art);
  };
  
<<<<<<< HEAD
  
=======
>>>>>>> deed6525f137046e4e43caefc01c5cd09c752158
  export const closeModal = (setSelectedArt) => {
    console.log("Closing modal");  
    setSelectedArt(null);
  };
  