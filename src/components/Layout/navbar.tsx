export default function Navbar() {
  return (
    <div className="border bg-transparent text-white flex items-center justify-between px-8 h-20 text-2xl">
      <h1>HOLLOW DEV</h1>
      <ul className="flex space-x-16">
        <li>Home</li>
        <li>Description</li>
        <li>FaQ</li>
      </ul>
      <button className="border">Sign In</button>
    </div>
  );
}
