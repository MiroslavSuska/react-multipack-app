import { Button, Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap';
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
            </NavStyled>
          </Navbar.Collapse>
        </ContainerStyled>
      </NavbarStyled>

      {/* <nav>
          <Ul>
            <Li>
              <LinkStyled to='/'>Home </LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/counter'>Counter app</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/todo'>Todo app</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/hackertyper'>Hacker Typer</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/tictactoe'>Tic Tac Toe</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/pexeso'>Pexeso</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/markdownblog'>Markdown blog</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/jokeapi'>Joke API DB</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/redux-counter'>Redux counter</LinkStyled>
            </Li>
          </Ul>
        </nav> */}

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

const Li = styled.li`
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin-top: 2rem;
  border: 4px solid ${theme.whiteColor};
  border-radius: 10px;
  padding: 0.7rem 0.5rem 0.8rem 0.5rem;
  transition: all 0.3s ease;
  ${Li}::after {
    content: '|';
  }
  ${Li}:last-child::after {
    content: '';
  }

  :hover {
    border-color: ${theme.secondaryDark};
    transition: all 0.3s ease;
  }
`;
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

/*   
  ::after {
    content: '|';
  }

  :last-child::after {
    content: '';
  }

  @media all and (max-width: 1450px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  @media all and (max-width: 1160px) {
    font-size: 1rem;
    padding: 0.5rem;
} */

// const LinkStyled = styled(Link)`
//   color: ${theme.whiteColor};
//   font-size: '1.4rem';
//   font-weight: bold;
//   padding: 0.8rem;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   align-items: center;
//   justify-content: center;
//   :hover {
//     color: ${theme.secondaryDark},
//     transition: all .3s ease;
//   }

//   ::after {
//     content: '|';
//   }

//   :last-child::after {
//     content: '';
//   }

//   @media all and (max-width: 1450px) {
//     font-size: 1.2rem;
//     padding: 0.6rem;
//   }

//   @media all and (max-width: 1160px) {
//     font-size: 1rem;
//     padding: 0.5rem;
//   }
// `;
