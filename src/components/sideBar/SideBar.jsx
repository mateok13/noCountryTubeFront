import images from "../../assets/image/image";
import { useEffect, useState } from "react";
import { environment } from "../../hooks/environment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SideBar.css';

const SideBar = () => {
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = environment.url + 'users/get-top-users';
    axios.get(url)
      .then(response => {
        const users = response.data.data.map(user => ({
          name: user.userName,
          imgSrc: images.default
        }));
        setRecommendations(users);
        console.log(response)
      })
      .catch(error => {
        console.error('Hubo un error al obtener los usuarios', error);
      });
  }, []);

  return (
    <div className="estiloSideBar">
      <h2>Recomendado</h2>
      <ul className="canalesTop">
        {recommendations.map((item, index) => (
          <li key={index} onClick={() => navigate(`/list-videos/${item.name}`)}>
            <img className="imgChannels" src={item.imgSrc} alt={item.name} />
            <h1>{item.name}</h1>
          </li>
        ))}
      </ul>
      <div className="bottomSection">
        <img className="logoNoCountry" src={images.LogoNoCountryTube} />
        <hr className="whiteLine" />
        <a className="hiperLink" href="https://github.com/No-Country/c18-17-n-node-react" target="_blank">
          <i className="bi bi-github iconGitHub"></i>
        </a>
        <p className="copyrightText">Copyright © 2024 No Country</p>
      </div>
    </div>
  );
};

export default SideBar;