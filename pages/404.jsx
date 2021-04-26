import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="contenido">
      <style jsx>{`
        .titulo {
          font-size: 2rem;
          text-align: center;
          margin: 2rem auto;
        }

        img {
          max-height: 500px;
          display: block;
          margin: auto;
          width: auto;
          object-fit: cover;
        }

        @media screen and (max-width: 991px) {
          img {
            width: 100%;
          }

          .contenido {
            margin: 0px;
          }
        }

        p {
          text-align: center;
          max-width: 800px;
          display: block;
          margin: 1rem auto;
          font-size: 1.2rem;
        }
      `}</style>

      <Head>
        <title>404 Not Found</title>
      </Head>

      <p className="titulo">Estamos preparando esta pagina para ti</p>
      <div>
        <img
          src="/mesa.png"
          alt="Female waiter taking order Illustration https://iconscout.com/illustration/female-waiter-taking-order-2801891#"
          className="centro"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt culpa
        ratione corporis odit optio, eligendi nemo asperiores voluptatem
        suscipit labore autem blanditiis ea modi deserunt fugiat. Nemo,
        voluptate culpa!
        <br />
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    </div>
  );
}
