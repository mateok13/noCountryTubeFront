import images from "../../assets/image/image"; // Importación de las imágenes
import './SideBar.css';

const SideBar = () => {
  const recommendations = [
    { name: 'Zelikkaa', imgSrc: images.canal1 },
    { name: 'Cooker1', imgSrc: images.canal2 },
    { name: 'Kingslea', imgSrc: images.canal3 },
    { name: 'Alfredst', imgSrc: images.canal4 }
  ];

  return (
    <div className="estiloSideBar">
      <h2>Recomendado</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>
            <img className="imgChannels" src={item.imgSrc} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
      <div className="bottomSection">
      <img className="logoNoCountry" src={images.LogoNoCountryTube} />
        <hr className="whiteLine" />
        <p className="copyrightText">Copyright © 2024 No Country</p>
      </div>
    </div>
  );
};

export default SideBar;
