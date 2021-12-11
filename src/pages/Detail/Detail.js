import { useState } from "react";

export default function Detail({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(false);

  if (loading) return <div>Cargando</div>;

  return <h1>{id}</h1>;
}
