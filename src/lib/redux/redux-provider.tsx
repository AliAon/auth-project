"use client";

import { Provider } from "react-redux";
import { store, persist } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }: any) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>{children}</PersistGate>
    </Provider>
  );
}
