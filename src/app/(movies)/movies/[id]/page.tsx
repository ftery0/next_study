import { Suspense } from "react";
import MoviesInfo from "src/Components/movies-videos/Info";
import MoviesVideos from "src/Components/movies-videos/vidoe";

export default async function MovieDetail({
    params: { id },
  }: {
    params: { id: string };
  }) {
    return (
      <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MoviesInfo id={id} />
        </Suspense>
        <h4>Videos</h4>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MoviesVideos id={id} />
        </Suspense>
      </div>
    );
  }