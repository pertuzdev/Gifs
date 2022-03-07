import { useEffect, useState } from "react";

import { Link } from "wouter";

import getTrendingSearches from "services/getTrendingSearches";

export default function TrendingSearches({ name }) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrending);
  }, []);

  return (
    <div className="Trending">
      <h3 className="Trending-title">{name}</h3>
      <ul className="Trending-list">
        {trending.slice(0, 10).map((trend) => (
          <li className="Trending-list-item" key={trend}>
            <Link className="Trend-link" to={`/search/${trend}`}>
              {trend}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
