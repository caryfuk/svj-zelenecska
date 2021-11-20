import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Custom404() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="header">
          <h1>
            SVJ Zelenečská
          </h1>
          <span>IČ: 247 11 641</span>
        </div>
        <div>
          <p>Na této adrese nic není.</p>
          <p>Pravděpodobně jste se sem dostali přes neplatný odkaz. Pokračujte prosím na <a href="/">domovskou stránku</a>.</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-flow: column nowrap;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          text-align: center;
        }
        .container iframe {
          max-width: 720px;
        }
        .categories {
          list-style: none;
          margin: 1rem;
        }
        .header {
          margin-bottom: 1rem;
        }
        .header span {
          font-style: italic;
        }
        h1 {
          font-size: 2.25rem;
          margin: 0;
          font-weight: 500;
          padding: 0;
        }
        h2 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 1.25;
          margin: 2rem 0 1rem 0;
        }
        h3 {
          font-size: 1.3rem;
          font-weight: 400;
          margin: 0;
        }
        p {
          margin: 0.5rem 0 1rem 0;
          font-size: 1rem;
        }
        .agenda,
        .map {
          width: 100%;
          height: 23vh
        }
        .map {
          margin-bottom: 2rem;
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
        .columns3 {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          max-width: 720px;
          width: 100%;
        }
        .columns3 div {
          flex: 1 1 33%;
        }
        @media (min-width: 769px) {
          .header {
            margin-bottom: 2.5rem;
          }
        }
        @media (min-width: 1024px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2rem;
            margin: 3rem 0 1rem 0;
          }
        }
      `}</style>
    </Layout>
  );
}
