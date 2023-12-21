import Post from "@/app/components/Post";

// export const dynamic = "force-static";

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return { title: post.title, description: post.body };
}

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
    (res) => res.json(),
  );

  console.log(posts);

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const fetchData = async (id) => {
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  return await request.json();
};

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id);
  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePost;
