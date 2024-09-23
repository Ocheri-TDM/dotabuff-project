import HeroList from "./HeroList";
const StatsG = ({ hi, hn, matchresult, totaltime, kda }) => {
    const heroIcon = HeroList[hi];

  return (
      <div className="match">
          <div className="match-info">
              <div className="hero-card">
                  <img src={heroIcon} alt={hn} className="hero-image" />
                  <span className="hero-name">{hn}</span>
              </div>
              <div className="match-details">
                  <p className={`match-status ${matchresult === 'Win' ? 'win' : 'lose'}`}>
                      {matchresult}
                  </p>
                  <p className="match-time">{totaltime}</p>
                  <p className="match-kda">{kda}</p>
              </div>
          </div>
      </div>
  );
}

export default StatsG;
