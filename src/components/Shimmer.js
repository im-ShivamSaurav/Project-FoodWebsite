function Shimmer() {

  const CardShimmer = () => (
    <div className="card-Shimmer">
      <div className="ShimmerMenuImg animate"></div>
      <div className="ShimmerHeading animate"></div>
      <div className="ShimmerCuisine animate"></div>
      <div className="Shimmer-loc">
        <div>
          <div className="ShimmerLocation animate"></div>
          <div className="ShimmerLocation animate"></div>
        </div>
        <div className="ShimmerRating animate"></div>
      </div>
    </div>
  )
  const arr = new Array(8).fill(0);
  return (
    <div className="rootContainer Shimmer">
      
        <div className="cardList">
          {arr.map((e,i)=>(
            <CardShimmer key={i}/>
          ))}
        </div>
      
    </div>
  );
}

export default Shimmer;
