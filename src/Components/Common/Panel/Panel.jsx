import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Divider,
	TextField,
	Typography,
} from '@mui/material';
import LocationField from 'Components/Pages/Dates/AddDateModal/LocationField.jsx';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Panel.css';

const Panel = ({ title = '', actions, children, sx }) => {
	const header = Boolean(title) && <h6 className='panel-header'>{title}</h6>;

	return (
		<Col sm={12} md={6} className='my-2'>
			<Card elevation={6}>
				{header}
				<CardContent>{children}</CardContent>
				{Boolean(actions) && <CardActions className='justify-content-end'>{actions}</CardActions>}
			</Card>
		</Col>
	);
};

Panel.Section = ({ title, topActions, bottomActions, children }) => {
	return (
		<Card elevation={0} className='mb-2'>
			{title && <h5 className='panel-header'>{title}</h5>}
			{Boolean(topActions) && (
				<CardActions className='justify-content-end'>{topActions}</CardActions>
			)}
			<CardContent>{children}</CardContent>
			{Boolean(bottomActions) && (
				<CardActions className='justify-content-end'>{bottomActions}</CardActions>
			)}
		</Card>
	);
};

Panel.Divider = props => <Divider className='my-4' />;

Panel.Header = ({ label = '', onChange, name, children, editing = false }) => {
	if (editing) {
		return (
			<TextField
				rows={3}
				color='warning'
				variant='outlined'
				value={children}
				label={label}
				onChange={onChange}
				name={name || label.toLowerCase()}
				InputProps={{ style: { fontSize: 'smaller' } }}
			/>
		);
	}
	return (
		<Typography color='primary' variant='h6' marginBottom={1}>
			{children}
		</Typography>
	);
};

Panel.Field = ({
	multiline = false,
	label,
	children,
	onChange,
	name,
	show = true,
	editing = false,
	isLocationField = false,
}) => {
	if (editing) {
		if (isLocationField) {
			return (
				<LocationField size='small' value={children} onChange={onChange} openOnStart={false} />
			);
		}

		return (
			<TextField
				fullWidth
				multiline={multiline}
				// rows={3}
				color='warning'
				variant='outlined'
				value={children}
				label={label}
				onChange={onChange}
				name={name || label.toLowerCase()}
				InputProps={{ style: { fontSize: 'smaller' } }}
			/>
		);
	}

	return (
		show && (
			<div>
				<Typography color='primary' variant='caption'>
					{label}
				</Typography>
				<Typography component='div' variant='body2'>
					{children}
				</Typography>
			</div>
		)
	);
};

export default Panel;
