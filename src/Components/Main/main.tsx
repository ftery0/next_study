const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMoveies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const respoense = await fetch(url);
  const json = await respoense.json();
  return json;
};

const Main = async () => {
  const Movies = await getMoveies();
  return <div>{JSON.stringify(Movies)}</div>;
};
export default Main;
