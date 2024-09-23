import cow from "../assets/images/cow.png";
import StatsG from "./StatsG";
import { useEffect, useState } from "react";
import LoadingStats from "./LoadingStats";
import axios from "axios";

const Stats = () => {
  const [stats, setStats] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        setIsLoading(true);
        const response = await axios.get('https://89c6ff6cb306a60e.mokky.dev/match-info');
        setStats(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="content">
      <div className="stats-block">
        <div className="player-info">
          <img src={cow} alt="Player Avatar" className="avatar" />
          <div className="player-details">
            <h2 className="player-name">Ocheri</h2>
            <p className="last-game">
              12 часов назад
              <br />
              <span className="h2-stats">ПОСЛЕДНЯЯ ИГРА</span>
            </p>
          </div>
          <div className="player-stats">
            <p className="matches">
              <span className="win">355</span>-
              <span className="lose">364</span>
              <span className="h2-stats">МАТЧИ</span>
            </p>
            <p className="winrate">49.24%</p>
            <span className="h2-stats">ДОЛЯ ПОБЕД</span>
          </div>
        </div>
      </div>

      {isLoading ? (
        <LoadingStats />
      ) : (
        <div className="matches-block">
          <h3 className="latest-matches-title">LATEST MATCHES</h3>
          {stats.map((stat) => (
            <StatsG
              key={stat.id}
              hi={stat.hi}
              hn={stat.hn} 
              matchresult={stat.matchresult} 
              totaltime={stat.totaltime} 
              kda={stat.kda}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Stats;