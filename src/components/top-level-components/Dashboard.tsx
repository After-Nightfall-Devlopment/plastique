import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import {
  StyledComponentProps,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

const styles: Styles<Theme, StyledComponentProps> = () => ({});

class Dashboard extends Component<DashboardProps> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid container justify={'center'}>
        <Grid item xs={4}>
          <Card>
            <Typography>{'Dashboard'}</Typography>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export type DashboardProps = WithStyles<typeof styles>;

export default withStyles(styles, { withTheme: true })(Dashboard);
