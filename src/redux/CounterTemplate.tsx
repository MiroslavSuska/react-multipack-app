import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { decrement, divide, increment, pow, powSelf, sqrt } from './counterSlice';
import styled from 'styled-components';

const ButtonStyled = styled.button({
  color: '#1d1e1f',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  backgroundColor: 'white',
  borderRadius: '5px',
  borderColor: '#1d1e1f',
  boxShadow: 'none',
  margin: '0.8rem',
  maxWidth: '8rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderImage: 'none',
  borderStyle: 'solid',
  ':hover': {
    color: 'rgb(29, 131, 161)',
    borderColor: 'rgb(29, 131, 161)',
    transition: 'all .3s ease',
  },
});

// Use throughout app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// The function is called a selector and allows us to select a value from the state.
const selectCount = (state: RootState) => state.counter.value;

export const CounterTemplate = () => {
  const counter = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Simple counter app</h1>
      <h1>{counter}</h1>
      <ButtonStyled onClick={() => dispatch(increment(1))}>+ 1</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(increment(2))}>+ 2</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(decrement(1))}>- 1</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(decrement(2))}>- 2</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(divide(2))}>/ 2</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(sqrt())}>sqrt</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(pow(2))}>pow 2</ButtonStyled>
      <ButtonStyled onClick={() => dispatch(powSelf())}>pow by self</ButtonStyled>
    </div>
  );
};
