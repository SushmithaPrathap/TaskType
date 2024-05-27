import React, { FC, ReactElement } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}
//this FC accepts a genriac type of IProfile interface. Using interface here instaed of type
//FC accepts a geneic and assigns it to the props.
//proptypes and interface ... which one to use?
//intefaces is a TS thing. they aonly avaialble in the developemnt time. They do not complie down to Js. not availble on console
//but proptypes are js thing they are vailable even during compile time. better for documentation with storybook
//use both!! they perform more checking!!

export const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'John' } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`} {/* extracting the first letter */}
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
