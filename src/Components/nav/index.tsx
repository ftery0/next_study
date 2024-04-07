import Link from "next/link";

export default function nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/profile"}>Porfile</Link>
        </li>
        <li>
          <Link href={"/post"}>Post</Link>
        </li>
      </ul>
    </nav>
  );
}
