import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';
import { selectFilter } from 'store/selector';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const changeFilter = e => dispatch(setFilter(e.target.value));

    return (
        <Input
            type="search"
            name="name"
            placeholder="Enter contact name"
            value={filter}
            onChange={changeFilter}
            pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
        />
    );
};
