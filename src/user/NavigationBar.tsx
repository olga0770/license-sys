import * as React from 'react';
import {Box, Typography} from "@material-ui/core";

interface IProps {}

const NavigationBar: React.SFC<IProps> = ({ children }) => {
  return (
    <Box component="span" m={1}>
      <Typography variant="h5">List of Users</Typography>
      { children }
    </Box>
  );
};

export default NavigationBar;
