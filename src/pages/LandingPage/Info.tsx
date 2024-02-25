import GetStartedButton from "./LoginButton";
function Info() {
  return (
    <div className="basis-96 grow flex flex-col gap-6 items-center text-white">
      <h1 className="font-bold text-7xl text-center max-sm:text-5xl">
        Sublease Apartments with Ease!
      </h1>
      <p className="text-center text-lg">
        Welcome to Lease Linker! Say goodbye to endless apartment searching and
        hello to hassle-free moves. With just a few clicks, find your perfect
        apartment exchange. Get started today!
      </p>
      <GetStartedButton />
    </div>
  );
}

export default Info;
