import { Button, Paper, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AuthContext from 'context/AuthContext.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState } from 'react';
import { useContext } from 'react';

const LoginPanel = ({ onClose }) => {
	const { loginUser: loginDefault, isServerError } = useContext(AuthContext);
	const defaultValues = { email: '', password: '' };
	const [form, handleInputChange, handleSubmit, reset] = useCustomForm(defaultValues, loginUser);

	function loginUser(data) {
		loginDefault(data);
		onClose();
	}

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<Stack paddingX={1} spacing={1}>
				<TextField
					label='Email'
					size='small'
					type='email'
					required
					name='email'
					value={form.email}
					onChange={handleInputChange}
				/>
				<TextField
					label='Password'
					name='password'
					size='small'
					type='password'
					required
					value={form.password}
					onChange={handleInputChange}
				/>
				<Button type='submit'>Login</Button>
			</Stack>
		</Box>
	);
};

export default LoginPanel;
