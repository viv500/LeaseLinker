import NavBar from "../LandingPage/NavBar";
import Error from "./Error";
import Footer from "../LandingPage/Footer";

function ErrorPage() {
  return (
    <div className="h-full w-full flex flex-col min-h-lvh">
      <NavBar />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
