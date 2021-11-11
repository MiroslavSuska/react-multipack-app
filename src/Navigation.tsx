import { AppleMusic } from './apple-music/AppleMusic';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { JokeAPI } from './joke-database/JokeAPI';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MarkdownBlog } from './markdown-blog/MarkdownBlog';
import { ReduxCounter } from './redux/ReduxCounter';
import { theme } from './theme';
import { useState } from 'react';
import Counter from './counter/Counter';
import HackerTyper from './hacker-typer/HackerTyper';
import Home from './router-components/Home';
import MemoryGame from './pexeso/MemoryGame';
import TicTacToe from './tictactoe/TicTacToe';
import Todo from './todo/Todo';
import styled from 'styled-components';

type expandType = boolean | 'expanded';

export const Navigation = () => {
  const [expanded, setExpanded] = useState<expandType>(false);

  return (
    <Router>
      <NavbarStyled collapseOnSelect expanded={expanded} expand='lg' variant='dark'>
        <ContainerStyled>
          <NavbarButtonStyled.Toggle
            aria-controls='responsive-navbar-nav'
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            style={{ border: `2px solid ${theme.secondaryDark}` }}
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <NavStyled className='me-auto'>
              <LinkStyled to='/' onClick={() => setExpanded(false)}>
                Home{' '}
              </LinkStyled>
              <LinkStyled to='/counter' onClick={() => setExpanded(false)}>
                Counter app
              </LinkStyled>
              <LinkStyled to='/todo' onClick={() => setExpanded(false)}>
                Todo app
              </LinkStyled>
              <LinkStyled to='/hackertyper' onClick={() => setExpanded(false)}>
                Hacker Typer
              </LinkStyled>
              <LinkStyled to='/tictactoe' onClick={() => setExpanded(false)}>
                Tic Tac Toe
              </LinkStyled>
              <LinkStyled to='/pexeso' onClick={() => setExpanded(false)}>
                Pexeso
              </LinkStyled>
              <LinkStyled to='/markdownblog' onClick={() => setExpanded(false)}>
                Markdown blog
              </LinkStyled>
              <LinkStyled to='/jokeapi' onClick={() => setExpanded(false)}>
                Joke API DB
              </LinkStyled>
              <LinkStyled to='/redux-counter' onClick={() => setExpanded(false)}>
                Redux counter
              </LinkStyled>
              <LinkStyled to='/apple-music' onClick={() => setExpanded(false)}>
                Apple music
              </LinkStyled>
            </NavStyled>
          </Navbar.Collapse>
        </ContainerStyled>
      </NavbarStyled>

      <Switch>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path='/todo'>
          <Todo />
        </Route>
        <Route path='/hackertyper'>
          <HackerTyper />
        </Route>
        <Route path='/tictactoe'>
          <TicTacToe />
        </Route>
        <Route path='/pexeso'>
          <MemoryGame />
        </Route>
        <Route path='/markdownblog'>
          <MarkdownBlog />
        </Route>
        <Route path='/jokeapi'>
          <JokeAPI />
        </Route>
        <Route path='/redux-counter'>
          <ReduxCounter />
        </Route>
        <Route path='/apple-music'>
          <AppleMusic />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

const NavbarButtonStyled = styled(Navbar)({
  color: theme.whiteColor,
  borderColor: theme.whiteColor,
});

const NavbarStyled = styled(Navbar)`
  margin: 1rem 0;
  justify-content: center;
  @media all and (max-width: 800px) {
    margin-top: 0;
  }
`;

const NavStyled = styled(Nav)`
  border: 4px solid ${theme.whiteColor};
  border-radius: 10px;
  transition: all 0.3s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  :hover {
    border-color: ${theme.secondaryDark};
    transition: all 0.3s ease;
  }
  @media all and (max-width: 992px) {
    border: none;
  }
`;

const ContainerStyled = styled(Container)({
  margin: '0 auto',
  '@media all and (max-width: 800px)': {
    padding: '0',
  },
});

const LinkStyled = styled(Link)`
  color: ${theme.whiteColor};
  font-size: '1.4rem';
  font-weight: bold;
  padding: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${theme.secondaryDark};
    transition: all 0.3s ease;
  }
  @media all and (max-width: 992px) {
    border-bottom: 1px solid ${theme.secondaryDark};
  }
`;
