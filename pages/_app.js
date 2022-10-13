import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { PatientContextProvider } from "../context/patientContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      {!pathname.startsWith("/dashboard") ? (
        <Component {...pageProps} />
      ) : (
        <PatientContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PatientContextProvider>
      )}
    </SessionProvider>
  );
}

export default MyApp;
