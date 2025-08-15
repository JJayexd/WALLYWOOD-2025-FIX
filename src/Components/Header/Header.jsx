import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
      <header className="flex items-center justify-between px-4 py-2">
        <h1 className="font-bold text-4xl">WALLYWOOD</h1>
        <Nav />
      </header>
    );
  };
  