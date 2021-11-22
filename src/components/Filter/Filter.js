import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookAction, phonebookSelector } from '../../redux/phoneBook';

export default function Filter() {
    const filter = useSelector(phonebookSelector.getFilter);
    const dispatch = useDispatch();

    return (
        <label className={s.label}>
            Find contacts by name:
            <input
                placeholder="Search"
                className={s.formInput}
                type="text"
                value={filter}
                onChange={e =>
                    dispatch(phonebookAction.changeFilter(e.target.value))
                }
            />
        </label>
    );
}
