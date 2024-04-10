async function getMovies(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
  );
  return response.json();
}
export default async function MoviesInfo({ id }: { id: string }) {
  const Movies = await getMovies(id);
  return <h6>{JSON.stringify(Movies)}</h6>;
}
