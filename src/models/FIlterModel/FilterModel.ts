import useFilterState from '../../store/atoms/Filter/filterState.ts';
import { FilterType } from '../../store/atoms/Filter/data.ts';

const FilterModel = () => {
  const [state, setState] = useFilterState();

  const setFilterType = (type: FilterType) => {
    setState({ ...state, type });
  };

  return { setFilterType };
};

export default FilterModel;
