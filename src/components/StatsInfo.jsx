const StatsInfo = ({ hi, hn, matchresult, totaltime, kda }) => {
    return (
      <div className="stats-card">
        <h3>Hero: {hi}</h3>
        <p>Hero Name: {hn}</p>
        <p>Match Result: {matchresult}</p>
        <p>Total Time: {totaltime}</p>
        <p>KDA: {kda}</p>
      </div>
    );
  };
export default StatsInfo;