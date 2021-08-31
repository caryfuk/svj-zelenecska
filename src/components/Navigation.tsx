import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import { listTags } from "../lib/tags";
import TagLink from "../components/TagLink";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>SVJ Zelenečská</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") && !router.pathname.startsWith("/posts/tags") ? "active" : null
                }
              >
                všechny příspěvky
              </a>
            </Link>
          </li>
          {listTags().map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 1rem;
              position: fixed;
              top: 0;
              background-color: var(--color-bg);
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: var(--color-text);
            }

            @media (min-width: 769px) {
              .container {
                width: 16rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 14rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
