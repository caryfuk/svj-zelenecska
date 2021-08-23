import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { listTags } from "../lib/tags";
import TagLink from "../components/TagLink";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            SVJ Zelenečská
          </h1>
        </div>
        <iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FPrague&src=OG45ajNwZzc0Z20wc3F1MmtoNTdndmhudDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&mode=AGENDA&hl=cs" width="400" height="400" scrolling="no"></iframe>
        <ul className="categories">
        {listTags().map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column nowrap;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .categories {
          list-style: none;
          margin: 1rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
