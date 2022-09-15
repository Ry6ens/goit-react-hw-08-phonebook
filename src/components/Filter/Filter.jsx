import { useDispatch } from "react-redux";

import styles from "./Filter.module.scss";
// import { filterContactAction } from "../../redux/actions";
import { filterContact } from "../../redux/filter/filter-slice";

const Filter = () => {
  const dispatch = useDispatch();

  function handleFilter({ target }) {
    dispatch(filterContact(target.value));
  }

  return (
    <div className={styles.thumb}>
      <label className={styles.label}>
        <span className={styles.title}>Find contacts by name:</span>
        <input className={styles.field} onChange={handleFilter} name="filter" />
      </label>
    </div>
  );
};

export default Filter;
