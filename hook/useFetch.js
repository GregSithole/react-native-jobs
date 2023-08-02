import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': '99b2023dfemsh2a25e82c2e3acc0p1d7069jsn51ed2ec94dfe',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
		},
		params: {
			...query
		}
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			alert(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	}

	return { data, isLoading, error, refetch }
}

export default useFetch;