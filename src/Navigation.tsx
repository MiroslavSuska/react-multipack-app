import { Component } from 'react';
import { JokeAPI } from './joke-database/JokeAPI';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MarkdownBlog } from './markdown-blog/MarkdownBlog';
import { ReduxCounter } from './redux/ReduxCounter';
import { theme } from './theme';
import Counter from './counter/Counter';
import HackerTyper from './hacker-typer/HackerTyper';
import Home from './router-components/Home';
import MemoryGame from './pexeso/MemoryGame';
import TicTacToe from './tictactoe/TicTacToe';
import Todo from './todo/Todo';
import styled from 'styled-components';

export class Navigation extends Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <nav>
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
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
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
        </div>
      </Router>
    );
  }
}

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
const LinkStyled = styled(Link)({
  color: theme.whiteColor,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  padding: '0.8rem',
  textDecoration: 'none',
  transition: 'all .3s ease',
  ':hover': {
    color: theme.secondaryDark,
    transition: 'all .3s ease',
  },
  '@media all and (max-width: 1450px)': {
    fontSize: '1.2rem',
    padding: '0.6rem',
  },
  '@media all and (max-width: 1160px)': {
    fontSize: '1rem',
    padding: '0.5rem',
  },
});
