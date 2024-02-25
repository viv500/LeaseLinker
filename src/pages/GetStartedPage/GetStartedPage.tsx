import GetStartedForm from "./GetStartedForm";
import signUpImage from "../../assets/images/signup.png";

function GetStartedPage() {
  return (
    <div className="bg-white relative flex min-h-lvh justify-center items-center">
      <div className=" justify-center items-center gap-10 max-w-7xl flex p-4 flex-wrap-reverse">
        <GetStartedForm />
        <div className="basis-96 grow border">
          <img src={signUpImage} />
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;
