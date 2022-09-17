import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState } from 'react';

const RegisterPanel = ({}) => {
	const { register } = useAuth();
	const defaultValues = { email: '', password: '', password2: '', username: '' };
	const [form, handleInputChange, handleSubmit, reset] = useCustomForm(defaultValues, registerUser);

	function registerUser(userInfo) {
		register(userInfo);
	}

	return (
		<Paper elevation={2}>
			<Box component='form' onSubmit={handleSubmit}>
				<Stack padding={1} spacing={1}>
					<TextField
						size='small'
						name='email'
						value={form.email}
						onChange={handleInputChange}
						label='Email'
						required
					/>
					<TextField
						size='small'
						name='password'
						value={form.password}
						onChange={handleInputChange}
						label='Password'
						required
					/>
					<TextField
						size='small'
						name='password2'
						value={form.password2}
						onChange={handleInputChange}
						label='Confirm Password'
						required
					/>
					<TextField
						size='small'
						name='username'
						value={form.username}
						onChange={handleInputChange}
						label='Username'
						required
					/>
					<Button type='submit'>Register</Button>
				</Stack>
			</Box>
		</Paper>
	);
};

export default RegisterPanel;
