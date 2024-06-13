import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import { environment } from '../../hooks/environment';
import UserVideos from '../userVideos/UserVideos';
import { useNavigate } from 'react-router-dom';

function InfoProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const { accessToken, setUserName } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const url = environment.url + 'users/profile';
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setUserInfo(response.data.data);
        setUserName(response.data.data.userName);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchData();
  }, [accessToken, setUserName]);

  if (!userInfo) {
    return navigate('/');
  }

  return (
    <div>
      <UserVideos usernameChannel={userInfo.userName}/>
    </div>
  );
}

export default InfoProfile;