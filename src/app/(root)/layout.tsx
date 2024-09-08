"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "@/stores/stores";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  cache: new InMemoryCache(),
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {children}
        <ProgressBar
          height="4px"
          color="black"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ApolloProvider>
    </Provider>
  );
}
