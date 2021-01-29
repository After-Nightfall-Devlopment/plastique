import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import {
  Theme,
  WithStyles,
  withStyles,
  StyledComponentProps,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { getLightTheme } from './configs/theme/light-theme';
import AppBar from './components/app-shell/AppBar';

const styles: Styles<Theme, StyledComponentProps> = (theme: Theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
});

class App extends Component<AppProps> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={getLightTheme()}>
        <AppBar />
        <div className={classes.root}>{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}

export interface AppProps extends WithStyles<typeof styles> {
  children: JSX.Element;
}

export default withStyles(styles, { withTheme: true })(App);
