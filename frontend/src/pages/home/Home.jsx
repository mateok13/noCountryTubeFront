import ListVideos from "../../components/listAllVideos/ListAllVideos";
import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";

function Home() {

    return (
      <>
        <NavBar />
        <SideBar />
        <ListVideos />
      </>
    )
  }
  
  export default Home;
  