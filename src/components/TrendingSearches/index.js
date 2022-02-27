import React, { useEffect, useRef, useState } from "react";

import { Link } from "wouter";

import getTrendingSearches from "services/getTrendingSearches";

import "./styles.css";

function TrendingSearches({ name, options = [], ...props }) {
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

export default function LazyTrendingSearches(props) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return <div ref={ref}>{show ? <TrendingSearches {...props} /> : null}</div>;
}
