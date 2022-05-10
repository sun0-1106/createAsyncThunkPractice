import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { searchResultRequest } from '../redux/resultSlice';

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`;

const Listpage = () => {
  const dispatch = useDispatch();
  //dispatch(searchResultRequest());
  const lists = useSelector((state: RootState) => state.resultSlice.data);
  //console.log(lists);

  return <Container>Listpage</Container>;
};

export default Listpage;
