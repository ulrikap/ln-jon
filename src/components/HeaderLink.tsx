import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, LinkProps } from "react-router-dom";

export interface IHeaderLinkProps {
  linkProps: LinkProps;
  text: string;
  className?: string;
}

const useStyles = makeStyles(() => ({
  link: {
    margin: "0 15px",
  },
}));

const HeaderLink = ({ linkProps, text, className = "" }: IHeaderLinkProps) => {
  const classes = useStyles();
  return (
    <Link {...linkProps} className={classes.link}>
      <Typography variant="h6" className={className}>
        {text}
      </Typography>
    </Link>
  );
};

export default HeaderLink;
