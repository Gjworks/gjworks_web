import PostsListClient from "./listClient";

interface PageProps {
  params: {
    pid: string;
  };
}

const PostsList: React.FC<PageProps> = ({
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
