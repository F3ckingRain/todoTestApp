export type FilterType = 'All' | 'Active' | 'Completed';

export type FilterStateType = {
  type: FilterType;
};

const initialState: FilterStateType = {
  type: 'All',
};

export default initialState;
