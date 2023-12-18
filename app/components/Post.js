import Link from "next/link";

const Post = ({ post }) => {
  return (
    <>
      <Link href="/">Назад</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author ID: {post.userId}</strong>
    </>
  );
};

export default Post;
