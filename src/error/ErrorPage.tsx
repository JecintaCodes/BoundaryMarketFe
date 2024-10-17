import bm from "../assets/bmlogo.jpg";
const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-primary w-[100%]">
      <div className="max-w-md mx-auto text-center animate-fadeIn md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-fadeIn w-[90%] ">
        <img
          src={bm}
          alt={bm}
          className="w-full mb-8 animate-bounce md:w-3/4 lg:w-1/2 xl:w-1/3"
        />
        <h1 className="text-9xl font-bold text-error animate-pulse">404</h1>
        <p className="text-2xl text-secondary animate-fadeIn">Page Not Found</p>
        <p className="text-lg text-secondary mb-8 animate-fadeIn">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded animate-zoom">
          <a href="/">Go Home</a>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
