import React from 'react';
import Wrapper from '../../containers/Wrapper/Wrapper.tsx';

import TodosContainer from '../../containers/TodosContainer/TodosContainer.tsx';

const HomePage = () => {
  return (
    <Wrapper>
      <TodosContainer />
    </Wrapper>
  );
};

export default HomePage;
