import { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Counter from './counter/Counter';
import HackerTyper from './hacker-typer/HackerTyper';
import Home from './router-components/Home';
import JokeAPI from './joke-database/JokeAPI';
import MarkdownBlog from './markdown-blog/MarkdownBlog';
import MemoryGame from './pexeso/MemoryGame';
import TicTacToe from './tictactoe/TicTacToe';
import Todo from './todo/Todo';
import styled from 'styled-components';

const Li = styled.li`
  flex-shrink: 2;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin-top: 2rem;
  border: 4px solid white;
  border-radius: 10px;
  padding: 0.8rem 0.8rem 1rem 0.8rem;
  transition: all 0.3s ease;
  ${Li}::after {
    content: '|';
  }
  ${Li}:last-child::after {
    content: '';
  }

  :hover {
    border-color: #1d1e1f;
    transition: all 0.3s ease;
  }
`;
const LinkStyled = styled(Link)({
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  padding: '1rem',
  textDecoration: 'none',
  transition: 'all .3s ease',
  ':hover': {
    color: '#1d1e1f',
    transition: 'all .3s ease',
  },
});

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
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
