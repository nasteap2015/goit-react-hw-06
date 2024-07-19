import css from './SearchBox.module.css'
import { useDispatch } from 'react-redux';
import { createFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(createFilter(value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;