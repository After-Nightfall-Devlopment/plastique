import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import {
  StyledComponentProps,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import Review from './Review';

const styles: Styles<Theme, StyledComponentProps> = () => ({});

class StoreCreator extends Component<StoreCreatorProps> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <div>
        <span>Store Creator</span>
        <Review />
      </div>
    );
  }
}

export type StoreCreatorProps = WithStyles<typeof styles>;

export default withStyles(styles, { withTheme: true })(StoreCreator);
