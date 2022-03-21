import { Card, Typography } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import NewTourModalBtn from 'Components/Pages/Console/Tours/NewTourModal/NewTourModalBtn.jsx';
import React from 'react';
import EditBandModalBtn from '../../EditBandModal/EditBandModalBtn.jsx';
import useBands from '../../useBands.js';
import MemberCard from './MemberCard.jsx';

const BandInfo = props => {
	const { activeMember, members } = useBands();

	const memberCards = members.map(member => <MemberCard key={member.email} member={member} />);

	const actions = (
		<>
			<EditBandModalBtn />
			<NewTourModalBtn />
		</>
	);

	if (activeMember) {
		const { bandName } = activeMember;
		return (
			<Panel.Section title='Active Band' bottomActions={actions}>
				<Typography color='primary' variant='h6' marginBottom={2}>
					{bandName}
				</Typography>
				<Typography color='primary' variant='caption'>
					Members
				</Typography>
				{memberCards}
			</Panel.Section>
		);
	}
	return null;
};

export default BandInfo;
