import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { bands } from '../Components/Pages/Console/Bands/bandsSlice.js';
import { members } from 'Components/Pages/Console/Bands/membersSlice.js';
import { tours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { token } from 'Components/Auth/Authentication/authSlice.js';
import { mainModal } from 'Components/Common/MainModal/mainModalSlice.js';
import { deleteModal } from 'Components/Common/DeleteModal/deleteModalSlice.js';
import { tourForm } from 'Components/Pages/Console/Tours/TourForm/tourFormSlice.js';

export const store = configureStore({
	reducer: {
		token,
		user,
		bands,
		tours,
		members,
		mainModal,
		deleteModal,
		tourForm,
	},
});
