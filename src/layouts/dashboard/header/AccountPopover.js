import {useState} from 'react';
// next
import Link from 'next/link';
// @mui
import {alpha,styled} from '@mui/material/styles';
import {Box, Divider, Typography, Stack, MenuItem, Avatar} from '@mui/material';
// components
import MenuPopover from '../../../components/MenuPopover';
import {IconButtonAnimate} from '../../../components/animate';

// ----------------------------------------------------------------------
const NextLink = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: `${theme.palette.text.primary}`,
}));
const MENU_OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: '/',
  },
  {
    label: 'Settings',
    linkTo: '/',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          // src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
          alt="Raj Chaudhary"
        />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{my: 1.5, px: 2.5}}>
          <Typography variant="subtitle2" noWrap>
            Raj Chaudhary
          </Typography>
          <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
            imtiazmohsin56@gmail.com
          </Typography>
        </Box>

        <Divider sx={{borderStyle: 'dashed'}} />

        <Stack sx={{p: 1}}>
          {MENU_OPTIONS.map((option) => (
            <NextLink key={option.label} href={option.linkTo} passHref>
              <MenuItem key={option.label} onClick={handleClose}>
                {option.label}
              </MenuItem>
            </NextLink>
          ))}
        </Stack>

        <Divider sx={{borderStyle: 'dashed'}} />

        <MenuItem sx={{m: 1}}>Logout</MenuItem>
      </MenuPopover>
    </>
  );
}