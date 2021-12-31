import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeDefinitions from "./routeDefinitions";
import { IntlProvider } from "react-intl";
import { Fragment } from "react";
import messages from "./i18n";
import { TranslationConsumer } from "./state/translation";

function App() {
  return (
    <div className="App">
      <TranslationConsumer>
        {({ locale }) => (
          <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
          >
            <BrowserRouter>
            <Header />
              <Routes>
                {routeDefinitions.map((route) => (
                  <Route {...route} />
                ))}
              </Routes>
            </BrowserRouter>
          </IntlProvider>
        )}
      </TranslationConsumer>
    </div>
  );
}

export default App;
