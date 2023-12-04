import Head from "next/head";
import Link from "next/link";

var unflatten = require("flat").unflatten;

export default function VulneravelAdmin({ msg }) {
  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <div style={{ padding: "5px 20px" }}>
        <p>💀 {msg} page!</p>
        <li>
          <Link href="/">
            <a>Back</a>
          </Link>
        </li>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const out = unflatten({ ...context.query });
  console.log(out)

  const mock = {}

  if (!mock.isAdmin) { // Deve ser sempre falso
    return {
      redirect: {
        destination: "/?redirected=true",
        permanent: false,
      },
    }
  }

  return {
    props: { msg: "Admin" },
  };
}

export const config = {
  amp: true,
}