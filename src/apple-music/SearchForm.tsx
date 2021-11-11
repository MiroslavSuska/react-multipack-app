import { ChangeEvent, FormEvent, useRef } from 'react';
import { debounce } from 'lodash-es';
import { theme } from '../theme';
import styled from 'styled-components';

type Props = {
  onHandleSearch: (queryInput: string) => void;
};

export const SearchForm = (props: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMusic();
  };

  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchMusic();
  }, 500);

  const searchMusic = () => {
    let queryInput = searchInput.current?.value;
    if (queryInput) props.onHandleSearch(queryInput);
  };

  return (
    <DivForm>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          onChange={handleInput}
          ref={searchInput}
          placeholder='Search for iTunes'
          autoFocus
        />
      </form>
    </DivForm>
  );
};

const DivForm = styled.div({
  margin: '50px auto',
});

const Input = styled.input({
  width: '100%',
  maxWidth: '400px',
  height: '50px',
  fontSize: '1.2rem',
  padding: '5px 10px',
  borderRadius: '5px',
  border: `2px solid ${theme.secondaryDark}`,
  boxShadow: 'none',
  '@media all and (max-width: 700px)': {
    fontSize: '1rem',
    height: '45px',
  },
});
