import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <h1>
          Všechny příspěvky
        </h1>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
        }
        h1 {
          margin: 0 0 2rem;
          padding: 0;
          font-weight: 100;
          font-size: 1.75rem;
          color: var(--color-grey-200);
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 2rem;
          }
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
