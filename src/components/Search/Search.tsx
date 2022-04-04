import { useCallback, useRef, useState } from 'react';
import { X, Search as SearchIcon } from 'assets/icons';
import { Container, SearchInput } from './Search.style';

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	}, []);

	const onClear = () => {
		setSearchValue('');
	};

	const setFocus = () => {
		inputRef.current?.focus();
	};

	return (
		<Container>
			<SearchIcon onClick={setFocus} />
			<SearchInput
				ref={inputRef}
				id="searchInput"
				type="text"
				onChange={onChangeHandler}
				value={searchValue}
			/>
			{searchValue && <X onClick={onClear} />}
		</Container>
	);
};

export { Search };
