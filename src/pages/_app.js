import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from '@/lib/apolloClient';

// Integrate GraphQL in a Next.js & React.js app
export default function App({ Component, pageProps }) {
  return <ApolloProvider client={ apolloClient }>
    <Component {...pageProps} />
  </ApolloProvider>;
}
