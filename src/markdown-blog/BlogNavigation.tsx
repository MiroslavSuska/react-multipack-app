import { Article } from './Article';
import { ArticleList } from './ArticleList';
import { CreateArticle } from './CreateArticle';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LogicStateContext } from './MarkdownBlog';
import { useContext } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const Ul = styled.ul({
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Li = styled.li({
  margin: '12px',
  fontSize: '20px',
});

const LinkStyled = styled(Link)({
  color: theme.whiteColor,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all .3s ease',
  ':hover': {
    color: theme.secondaryDark,
    transition: 'all .3s ease',
  },
});

export const BlogNavigation = () => {
  const { articles, setArticles } = useContext(LogicStateContext);

  return (
    <DivOuter>
      <h1>Markdown blog</h1>
      <Router basename='/markdownblog'>
        <nav>
          <Ul>
            <Li>
              <LinkStyled to='/'>Articles</LinkStyled>
            </Li>
            <Li>
              <LinkStyled to='/article-create'>Create article</LinkStyled>
            </Li>
          </Ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <ArticleList />
          </Route>
          <Route exact path='/article-create'>
            <CreateArticle />
          </Route>
          {articles.map((article, index) => (
            <Route exact key={article.id} path={`/article/${article.id}`}>
              <Article article={article} />
            </Route>
          ))}
        </Switch>
      </Router>
    </DivOuter>
  );
};
