import { useCallback, useRef } from 'react';
import { X, Search as SearchIcon } from 'assets/icons';
import { Container, SearchInput } from './Search.style';

type Props = {
	value: string;
	onChange: (value: string) => void;
};

const Search = ({ value, onChange }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeHandler = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	const onClear = () => {
		onChange('');
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
				value={value}
			/>
			{value && <X onClick={onClear} />}
		</Container>
	);
};

export { Search };
