import moment from "moment";
import "moment/locale/mn";
import { useEffect } from "react";

export default ({ post }) => {
  useEffect(() => {
    moment.locale("mn");
  }, []);
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={post.publisher.picture}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
        />
        {post.publisher.title}, {moment(post.date).format("ll")}
      </p>

      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {post.title}
      </h1>

      <h2 className="blog-detail-header-subtitle mb-3">{post.subtitle}</h2>

      <img
        className="img-fluid rounded"
        src={post.cover_image.url}
        alt={post.cover_image.alt}
      />
    </div>
  );
};
