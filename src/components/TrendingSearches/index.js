import React, { useEffect, useRef, useState } from "react";

import { Link } from "wouter";

import getTrendingSearches from "services/getTrendingSearches";

import "./styles.css";

export default function TrendingSearches({ name, options = [], ...props }) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingSearches().then(setTrending);
  }, []);

  return (
    <div className={props.className}>
      <h3 className="Trending-title">{name}</h3>
      <ul className="Trending-list">
        {trending.slice(0, 10).map((trend) => (
          <li className="Trend-li" key={trend}>
            <Link className="Trend-link" to={`/search/${trend}`}>
              {trend}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
