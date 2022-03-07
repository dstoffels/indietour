import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import './TourSelector.css';

const TourSelector = props => {
	const [tour, setTour] = useState('tour1');

	const handleChange = e => setTour(e.target.value);

	return (
		<div>
			<FormControl>
				<Select
					value={tour}
					onChange={handleChange}
					variant='standard'
					className='tour-select'
					MenuProps={{ PaperProps: { sx: { bgcolor: 'rgb(18,18,18)' } } }}>
					<MenuItem value='tour1'>bigboi tour 2022sbigboi tour 2022s</MenuItem>
					<MenuItem value='tour2'>tour2</MenuItem>
					<MenuItem value='tour3'>tour3</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default TourSelector;
