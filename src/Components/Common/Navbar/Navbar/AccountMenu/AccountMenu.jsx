import { Login, Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import useUser from '../../../../../hooks/useUser.js';
import AuthForm from '../../../../Auth/AuthForm/AuthForm.jsx';
import LogOutBtn from '../../../../Auth/LogOutBtn/LogOutBtn.jsx';

const AccoutMenu = props => {
	// STATE
	const user = useUser();
	// LOCAL STATE
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	// HANDLERS
	const handleClick = e => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
				<Avatar sx={{ width: 32, height: 32 }}>{user?.displayName.charAt(0)}</Avatar>
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				PaperProps={{
					elevation: 5,
					sx: {
						width: 400,
						backgroundColor: 'rgb(18,18,18)',
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'rgb(18,18,18)',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}>
				<AuthForm />

				{/* <LogOutBtn /> */}
			</Menu>
		</>
	);
};

export default AccoutMenu;

// <MenuItem>
// 	<ListItemIcon>
// 		<Settings fontSize='small' />
// 	</ListItemIcon>
// 	Settings
// </MenuItem>
