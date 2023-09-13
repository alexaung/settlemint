import { SearchBar } from "@components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Book Catalogue</h1>
          <p>Explore our books you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
