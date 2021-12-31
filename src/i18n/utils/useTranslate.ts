import { MessageDescriptor, useIntl } from "react-intl";

/**
 * Must be used above a IntlProvider
 *
 * @returns Function that can translate message ids
 */
const useTranslate = (): ((id: MessageDescriptor) => string) => {
  const intl = useIntl();
  const translate = (id: MessageDescriptor) => intl.formatMessage(id);

  return translate;
};

export default useTranslate;
