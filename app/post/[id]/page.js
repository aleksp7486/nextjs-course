import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);
  return { title: post.title, description: post.body };
}

const fetchData = async (id) => {
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  return await request.json();
};

const PagePost = async ({ params: { id } }) => {
  console.log(id);
  const post = await fetchData(id);
  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePost;
