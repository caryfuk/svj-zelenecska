import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

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
          <span>IČ: 247 11 641</span>
        </div>
        <h2>Nadcházející události</h2>
        <iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FPrague&src=OG45ajNwZzc0Z20wc3F1MmtoNTdndmhudDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&mode=AGENDA&hl=cs" width="500" height="400" scrolling="no"></iframe>
        <h2>Základní údaje a kontakty</h2>
        <h3>Adresa</h3>
        <p>
          Zelenečská 510/59<br />
          Praha 198 00
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8165284972933!2d14.538842215969142!3d50.10844101982959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bed25831e231d%3A0xbc13d55ec0881fce!2sZelene%C4%8Dsk%C3%A1%2059%2C%20198%2000%20Praha%2014!5e0!3m2!1scs!2scz!4v1630257868993!5m2!1scs!2scz" width="500" height="500" allowfullscreen="" loading="lazy"></iframe>
        <div className="columns2">
          <div className="left">
            <h3>Předseda</h3>
            <p>
              Pavel Moravec<br />
              604 112 357<br />
              svj-zelenecska@gmail.com
            </p>
          </div>
          <div className="right">
            <h3>Členové výboru</h3>
            <p>
              Jaroslav Müller<br />
              Markéta Hrůnková
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-flow: column nowrap;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .categories {
          list-style: none;
          margin: 1rem;
        }
        .header {
          text-align: center;
        }
        .header span {
          font-style: italic;
        }
        h1 {
          font-size: 1.5rem;
          margin: 0;
          font-weight: 500;
          padding: 0;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          margin: 2rem 0 0 0;
        }
        h3 {
          margin: 2rem 0 0 0;
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
        .columns2 {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          width: 80%;
        }
        .columns2 div {
          flex: 0 0 40%;
          min-width: 20rem;
          text-align: center;
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
