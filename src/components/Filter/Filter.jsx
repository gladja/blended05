import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()

  const handleFilterChange = ({target}) => {
    const value = target.value;

    dispatch(updateFilter(value))
  }

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type='text'
          id='search'
          placeholder='Search something..'
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};
