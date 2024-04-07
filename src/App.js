import React from "react";
import NavigationStack from "./routes/NavigationStack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";
import { ToastMessage } from "react-native-toast-message";

const App = () => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack>
          <ToastMessage />
        </NavigationStack>
      </PersistGate>
    </Provider>
  );
};

export default App;
