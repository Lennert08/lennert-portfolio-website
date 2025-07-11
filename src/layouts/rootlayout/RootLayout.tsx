import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./RootLayout.scss"; // vergeet deze niet toe te voegen
import MainNavBar from "../../components/mainnavbar/MainNavBar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <MainNavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default RootLayout;
