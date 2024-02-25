import GetStartedForm from "./GetStartedForm";
import signUpImage from "../../assets/images/signup.png";
import GetStartedNavBar from "./GetStartedNavBar";

function GetStartedPage() {
  return (
    <div className="relative flex min-h-lvh justify-center items-center flex-col">
      <GetStartedNavBar />

      <div className=" justify-center items-center gap-10 max-w-7xl flex p-4 grow ">
        <div className=" flex rounded-md flex-wrap-reverse  bg-white p-8">
          <GetStartedForm />
          <div className="basis-96 grow ">
            <img src={signUpImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;
