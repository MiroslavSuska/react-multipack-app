import { ButtonStyled, theme } from '../theme';
import { LogicStateContext } from './MarkdownBlog';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

type article = {
  id: number;
  author: string;
  title: string;
  slug: string;
  text: string;
};

export const Article = (props: { article: article }) => {
  const { articles, setArticles } = useContext(LogicStateContext);
  let history = useHistory();
  const handleDelete = () => {
    setArticles(prev => prev.filter(article => article.id !== props.article.id));
    history.push('/');
  };

  return (
    <div>
      <DivOuter>
        <H1>{props.article.title}</H1>
        <H2>by {props.article.author}</H2>
        <ReactMarkdownStyled>{props.article.text}</ReactMarkdownStyled>
      </DivOuter>

      <ButtonDelete onClick={handleDelete}>Delete article</ButtonDelete>
    </div>
  );
};

const DivOuter = styled.div({
  margin: '40px auto',
  padding: '20px',
  backgroundColor: theme.whiteColor,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
  maxWidth: '1100px',
  borderRadius: '10px',
  border: `2px solid ${theme.secondaryDark}`,
});

const H1 = styled.h1({
  margin: '0 0 15px 0',
});

const H2 = styled.h2({
  margin: '0 0 15px 0',
  paddingBottom: '20px',
  fontSize: '24px',
  fontWeight: 'normal',
  borderBottom: `1px solid ${theme.secondaryDark}`,
});

const ReactMarkdownStyled = styled(ReactMarkdown)({
  color: theme.blackColor,
});

const ButtonDelete = ButtonStyled;
