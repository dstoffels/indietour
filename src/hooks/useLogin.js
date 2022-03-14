import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { DATES } from '../constants/routes.js';
import { fetchUserBands } from '../Redux/bandsSlice.js';
=======
import { fetchUserBands } from '../redux/bandsSlice.js';
>>>>>>> console
import useUser from './useUser.js';

const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useUser();
	const { prevPage } = useSelector(state => state.nav);

	useEffect(() => {
		if (user) {
			navigate(prevPage);
			dispatch(fetchUserBands());
		}
	}, [user]);
};

export default useLogin;
