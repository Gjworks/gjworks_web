import PostsListClient from "./listClient";

interface PostsListProps {
  params: {
    pid: string;
  };
}

const PostsList: React.FC<PostsListProps> = ({
  params,
}: {
  params: { pid: string };
}) => {
  console.log(params);
  return (
    <>
      <PostsListClient params={params} />
    </>
  );
};

export default PostsList;
