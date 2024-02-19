export default function Hero() {
  return (
    <div className="container mt-20 sm:mt-24 flex content-center max-w-[1700] mx-auto sm:my-8 rounded-3xl shadow-lg justify-between text-center">
      <div className="hidden sm:block img-container  w-[55%]">
        <img className="rounded-l-3xl object-cover w-full h-[300px]" src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"/>
      </div>
      <div className="text-container w-auto my-auto mx-auto bg-clip-text bg-gradient-to-r from-red-700 to-blue-700">
        <h2 className="Comp text-transparent text-5xl font-extrabold m-2">Welcome to Food City</h2>
        <h4 className="temp text-transaparent text-xl font-bold w-72 text-center mx-auto my-6">
          Your favourite dishes...
          <br />
          Anytime | Anywhere
        </h4>
      </div>
    </div>
  );
}
