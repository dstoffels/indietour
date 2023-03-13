import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import Panel from 'components/Panel/Panel.jsx';
import useForm from 'hooks/useForm.js';
import useStore from 'hooks/useStore.js';
import { updateFormData } from 'redux/modalSlice.js';
import withActiveBand from 'utils/withActiveBand.js';
import BandSelect from '../../components/band/BandSelect/BandSelect.jsx';
import TourListItem from '../../components/band/TourListItem/TourListItem.jsx';
import UserListItem from '../../components/band/UserListItem/UserListItem.jsx';
import { useDispatch } from 'react-redux';

const BandPanel = ({}) => {
	const { activeBand } = useStore();
	const { formKeys, openForm } = useForm();

	const tours = activeBand?.tours?.map((tour, i) => (
		<TourListItem key={`${i}-${tour.id}`} tour={tour} />
	));

	const handleAddTour = () => {
		openForm(formKeys.newTour, {
			name: '',
			notes: '',
			users: [],
			dates: [],
		});
	};

	const users = activeBand?.users?.map((user, i) => (
		<UserListItem key={`${i}-${user.id}`} user={user} />
	));
	return (
		<Panel title={activeBand.name} headerEl={<BandSelect />}>
			<Grid container justifyContent='space-evenly' spacing={2} padding={2}>
				<ListPanel title='Tours' list={tours} onAdd={handleAddTour} />
				<ListPanel title='Users' list={users} />
			</Grid>
		</Panel>
	);
};

export default withActiveBand(BandPanel);
