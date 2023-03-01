import css from "./contactsFilter.module.css";
import { setFilterValue } from "Redux/filterSlise";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter);
  return(<label className={css.filter} htmlFor="">
    Find contacts by name:
    <input className={css.filter__input} type="text" value={filter} onChange={(e) => {
      dispatch(setFilterValue(e.target.value))
    }} />
  </label>
)};

export default Filter;