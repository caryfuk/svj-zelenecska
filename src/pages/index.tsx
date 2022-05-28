import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import PostList from "../components/PostList";

export default function Index() {
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
          <span>IČ: 247 11 641</span><br />
          <span>datová schránka: 4bn2gw2</span>
        </div>
        <h2>Nadcházející události</h2>
        <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FPrague&src=OG45ajNwZzc0Z20wc3F1MmtoNTdndmhudDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&mode=AGENDA&hl=cs" scrolling="no" className="agenda"></iframe>
        <h2>Základní údaje a kontakty</h2>
        <div className="columns3">
          <div>
          <h3>Adresa</h3>
            <p>
              Zelenečská 510/59<br />
              Praha 198 00
            </p>
          </div>
          <div>
            <h3>Předseda</h3>
            <p>
              Pavel Moravec<br />
              604 112 357<br />
              zelenecska.svj@gmail.com
            </p>
          </div>
          <div>
            <h3>Členové výboru</h3>
            <p>
              Jaroslav Müller<br />
              Markéta Hrůnková
            </p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8165284972933!2d14.538842215969142!3d50.10844101982959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bed25831e231d%3A0xbc13d55ec0881fce!2sZelene%C4%8Dsk%C3%A1%2059%2C%20198%2000%20Praha%2014!5e0!3m2!1scs!2scz!4v1630257868993!5m2!1scs!2scz" loading="lazy" className="map"></iframe>
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
          height: 25vh
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
