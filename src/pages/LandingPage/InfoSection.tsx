import heroImage from "../../assets/images/heroimage.png";
import Info from "./Info";

function InfoSection() {
  return (
    <div className="flex justify-center items-center w-full grow">
      <div className=" w-full h-full flex justify-center items-center flex-wrap-reverse max-w-7xl p-4 gap-10">
        <Info />
        <div className="basis-96 grow">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
