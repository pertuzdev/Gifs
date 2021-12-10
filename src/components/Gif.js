export default function Gif({ id, url, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <img key={id} src={url} alt={title} />
    </div>
  );
}
