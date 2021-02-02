import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { State } from '../../configs/redux/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
    },
  })
);

const TopAppBar = (props: TopAppBarProps): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position={'static'} className={classes.root}>
      <Toolbar>
        <Typography style={{ flexGrow: 1 }} variant={'h6'}>
          {props.defaultData}
        </Typography>
        <Typography variant={'h6'}>{props.dispatchedData}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export interface TopAppBarProps {
  defaultData: string;
  dispatchedData: string;
}

const mapStateToProps = (state: State): TopAppBarProps => {
  return ({
    defaultData: state.applicationState.defaultData,
    dispatchedData: state.applicationState.dispatchedData,
  } as unknown) as TopAppBarProps;
};

const mapDispatchToProps = (dispatch: Dispatch): TopAppBarProps =>
  (({} as unknown) as TopAppBarProps);

export default connect(mapStateToProps, mapDispatchToProps)(TopAppBar);
