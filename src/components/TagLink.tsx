import Link from "next/link";
import { useRouter } from "next/router";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};

export default function Tag({ tag }: Props) {
  const router = useRouter();
  const isActive = () => {
    if (Array.isArray(router.query.slug)) {
      return router.query.slug.find(item => item === tag.slug);
    } else {
      return false;
    }
  }
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a className={
          isActive() ? "active" : null
        }>{tag.name}</a>
      </Link>
      <style jsx>
        {`
          .active { color: #222 }
        `}
      </style>
    </>
  );
}
