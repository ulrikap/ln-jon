import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { defineMessages } from "react-intl";
import useTranslate from "../i18n/utils/useTranslate";
import HeaderLocaleMenu from "./HeaderLocaleMenu";
import HeaderLink from "./HeaderLink";

const messages = defineMessages({
  title: {
    id: "landing-title",
    defaultMessage: "Searey",
  },
  history: {
    id: "landing-header-history",
    defaultMessage: "History",
  },
  buildProcess: {
    id: "landing-header-buildProcess",
    defaultMessage: "Building process",
  },
  about: {
    id: "landing-header-about",
    defaultMessage: "About the organization",
  },
  english: {
    id: "landing-header-english",
    defaultMessage: "English",
  },
  norwegian: {
    id: "landing-header-norwegian",
    defaultMessage: "Norwegian",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  subtitle: {
    flexGrow: 0,
    color: "black",
    margin: "0px 10px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <AppBar style={{ background: "transparent" }} position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {translate(messages.title)}
        </Typography>
        <HeaderLink
          linkProps={{ to: "/history" }}
          text={translate(messages.history)}
        />
        <HeaderLink
          linkProps={{ to: "/process" }}
          text={translate(messages.buildProcess)}
        />
        <HeaderLink
          linkProps={{ to: "/history" }}
          text={translate(messages.history)}
        />
        <HeaderLocaleMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
