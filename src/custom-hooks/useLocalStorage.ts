import { useState } from 'react';

type ReturnValue = [
	value: string | null,
	{
		setItem: (value: string) => void,
		removeItem: () => void,
	}
];
type UseLocalStorage = (key: string) => ReturnValue;

const useLocalStorage: UseLocalStorage = (key: string): ReturnValue => {
	const [storedValue, setStoredValue] = useState<string | null>(() => {
		const item = localStorage.getItem(key);
		return item ? item : null;
	});

	const setItem = (value: string) => {
		localStorage.setItem(key, value);
		setStoredValue(value);
	};

	const removeItem = () => {
		localStorage.removeItem(key);
		setStoredValue(null);
	};

	return [storedValue, { setItem, removeItem }];
};

export default useLocalStorage;

