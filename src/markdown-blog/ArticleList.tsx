import { BlogContext } from './MarkdownBlog';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const Ul = styled.ul({
  listStyleType: 'none',
  padding: '0',
});

const Li = styled.li({
  margin: '5px',
  fontSize: '20px',
});

const LinkStyled = styled(Link)({
  display: 'block',
  color: theme.whiteColor,
  textDecoration: 'none',
  margin: '7px auto',
  border: `1px solid ${theme.whiteColor}`,
  padding: '5px',
  maxWidth: '500px',
  transition: 'all .3s ease',
  ':hover': {
    color: theme.primaryBlue,
    borderColor: theme.primaryBlue,
    backgroundColor: theme.whiteColor,
    transition: 'all .3s ease',
  },
});

const DivTitle = styled.div({
  fontSize: '21px',
  fontWeight: 'bold',
});

const DivAuthor = styled.div({
  fontSize: '16px',
});

export const ArticleList = () => {
  const { articles, setArticles } = useContext(BlogContext);

  return (
    <DivOuter>
      <h2>All articles: </h2>
      <Ul>
        {articles.map(article => (
          <li key={article.id}>
            <LinkStyled to={'/article/' + article.id}>
              <DivTitle>{article.title}</DivTitle>
              <DivAuthor>by {article.author}</DivAuthor>
            </LinkStyled>
          </li>
        ))}
      </Ul>
    </DivOuter>
  );
};
