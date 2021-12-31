import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { defineMessages } from "react-intl";
import useTranslate from "../i18n/utils/useTranslate";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const messages = defineMessages({
  errorBody: {
    id: "notfound-body",
    defaultMessage: "Whoops, nothing here.",
  },
  goBack: {
    id: "notfound-goback",
    defaultMessage: "Go back",
  },
});

const NotFound = () => {
  const translate = useTranslate();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Typography>{translate(messages.errorBody)}</Typography>
        <Link to="/">
          <Typography>{translate(messages.goBack)}</Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
