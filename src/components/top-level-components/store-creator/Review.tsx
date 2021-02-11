import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { save } from '../../../creators/save';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const Review = (props: ReviewProps): JSX.Element => {
  const classes = useStyles();
  const [username, setUsername] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <TextField
        data-testid={'username-textfield'}
        label={'Username'}
        value={username}
        onChange={handleChange}
      />
      <Button
        onClick={(): void => {
          props.saveClickHandler(username);
        }}
        data-testid={'save-button'}
      >
        functional comp
      </Button>
    </form>
  );
};

export interface ReviewProps {
  REPLACE_ME: undefined;
  saveClickHandler: (username: string) => void;
}

const mapStateToProps = (state: any): ReviewProps => {
  return ({} as unknown) as ReviewProps;
};

const mapDispatchToProps = (dispatch: Dispatch): ReviewProps =>
  (({
    saveClickHandler: (username: string) => {
      dispatch(save(username));
    },
  } as unknown) as ReviewProps);

export default connect(mapStateToProps, mapDispatchToProps)(Review);
