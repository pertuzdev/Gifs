import React, { Suspense } from "react";

import { useNearScreen } from "hooks/useNearScreen";

import "./styles.css";

import Spinner from "components/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearches(props) {
  const { isNearScreen, ref } = useNearScreen();

  return (
    <div ref={ref}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches {...props} /> : <Spinner />}
      </Suspense>
    </div>
  );
}
