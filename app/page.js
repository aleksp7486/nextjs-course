import Link from "next/link";

const fetchData = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await request.json();
};

export default async function Home() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Главная страница</h1>
      {posts.map((post) => (
        <ul>
          <li className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={"/post/" + post.id}>Детальнее</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
