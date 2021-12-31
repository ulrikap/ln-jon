import { createContext, useContext, useState } from "react";

export const TranslationContext = createContext(undefined);

function TranslationProvider({ children }) {
  const [locale, setLocale] = useState("en");
  return (
    <TranslationContext.Provider value={{ locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

function TranslationConsumer({ children }) {
  return (
    <TranslationContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("CountConsumer must be used within a CountProvider");
        }
        return children(context);
      }}
    </TranslationContext.Consumer>
  );
}

const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { TranslationProvider, TranslationConsumer, useTranslation };
