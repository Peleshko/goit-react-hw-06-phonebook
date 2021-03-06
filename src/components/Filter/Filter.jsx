import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
