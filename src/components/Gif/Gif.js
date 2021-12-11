import { Link } from "wouter";

export default function Gif({ id, url, title }) {
  return (
    <Link to={`/gif/${id}`}>
      <h1>{title}</h1>
      <img key={id} src={url} alt={title} />
    </Link>
  );
}
