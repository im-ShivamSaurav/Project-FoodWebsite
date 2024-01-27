function Shimmer() {
  const CardShimmer = () => (
    <div className="card-Shimmer m-3 sm:w-60 w-72 animate-pulse -z-10 flex items-center sm:block ">
      <div className="ShimmerMenuImg animate bg-gray-300 w-44 h-20 sm:w-56 sm:h-36 my-2 rounded-2xl"></div>
      <div>
        <div className="ShimmerHeading animate bg-gray-300 w-32 mx-2 sm:w-36 h-3 my-2 rounded-lg"></div>
        <div className="ShimmerCuisine animate bg-gray-300 w-40 mx-2 sm:w-48 h-2 my-2 rounded-lg"></div>
        <div className="Shimmer-loc flex">
          <div>
            <div className="ShimmerLocation animate bg-gray-300 w-32 mx-2 sm:w-32 h-2 my-2 rounded-lg"></div>
            <div className="ShimmerLocation animate bg-gray-300 w-24 mx-2 sm:w-28 h-2 my-2 rounded-lg"></div>
          </div>
          <div className="ShimmerRating animate bg-gray-300 w-9 mx-2 sm:w-11 sm:ml-12 h-7 my-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
  const arr = new Array(10).fill(0);
  return (
    <div className="rootContainer Shimmer">
      <div className="cardList flex flex-wrap justify-evenly">
        {arr.map((e, i) => (
          <CardShimmer key={i} />
        ))}
      </div>
    </div>
  );
}

export default Shimmer;
