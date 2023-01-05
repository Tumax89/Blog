import { Row, Col } from "react-bootstrap";

import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import ListItem from "components/list-item";
import { usePosts } from "hooks/usePosts";

export default function Home({ posts }) {
  const { data, error, isLoading } = usePosts();

  if (isError) return <div>Алдаа гарлаа....</div>;
  if (isLoading) return <div>Ачаалж байна...</div>;
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      <pre>{/*JSON.stringify(posts, null, 2)*/}</pre>
      <Row className="mb-5">
        <Col md="10">
          <ListItem />
        </Col>
        {posts.map((post) => (
          <Col md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
