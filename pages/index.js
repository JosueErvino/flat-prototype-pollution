import Head from "next/head";
import Link from "next/link";

export default function Home({ msg, redirected }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div style={{ padding: "5px 20px" }}>
        <p>👋 Olá {msg}!</p>
        {redirected && <p>👀 Você foi redirecionado!</p>}
        <li>
          <Link href="/vulneravel-admin">
            <a>Link Admin</a>
          </Link>
        </li>
        <li>
          <Link href="/vulneravel">
            <a>Link Vulnerável</a>
          </Link>
        </li>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Return msg and check if is redirected
  const out = { ...context.query };
  return {
    props: { msg: "Mundo", redirected: out.redirected || false },
  };
}

export const config = { amp: true };
