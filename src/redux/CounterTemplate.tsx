import { AppDispatch, RootState } from './store';
import { ButtonStyled } from '../theme';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { decrement, divide, increment, pow, powSelf, sqrt } from './counterSlice';

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
      <Button onClick={() => dispatch(increment(1))}>+ 1</Button>
      <Button onClick={() => dispatch(increment(2))}>+ 2</Button>
      <Button onClick={() => dispatch(decrement(1))}>- 1</Button>
      <Button onClick={() => dispatch(decrement(2))}>- 2</Button>
      <Button onClick={() => dispatch(divide(2))}>/ 2</Button>
      <Button onClick={() => dispatch(sqrt())}>sqrt</Button>
      <Button onClick={() => dispatch(pow(2))}>pow 2</Button>
      <Button onClick={() => dispatch(powSelf())}>pow by self</Button>
    </div>
  );
};

const Button = ButtonStyled;
