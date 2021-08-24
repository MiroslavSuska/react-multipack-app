import { LogicStateContext } from './MarkdownBlog';
import { slugify } from './textHelpers';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const DivAlert = styled.div({
  color: theme.redColor,
  fontWeight: 'bold',
});

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',

  maxWidth: '600px',
});

const Input = styled.input({
  height: '35px',
  marginBottom: '7px',
  fontSize: '18px',
  padding: '0 5px',
});

const Textarea = styled.textarea({
  minHeight: '300px',
  marginBottom: '7px',
  fontSize: '18px',
  padding: '7px',
});

const Button = styled.button({
  color: theme.secondaryDark,
  backgroundColor: theme.whiteColor,
  borderColor: theme.secondaryDark,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  borderRadius: '5px',
  boxShadow: 'none',
  maxWidth: '10rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderStyle: 'solid',
  margin: '30px auto',
  ':hover': {
    color: theme.primaryBlue,
    borderColor: theme.primaryBlue,
    transition: 'all .3s ease',
  },
});

export const CreateArticle = () => {
  const { articles, setArticles } = useContext(LogicStateContext);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(false);
  let history = useHistory();

  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.currentTarget.value);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const createArticle = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (author && title && text) {
      const newArticle = {
        id: Math.max(...articles.map(article => article.id)) + 1,
        author: author,
        title: title,
        slug: slugify(title),
        text: text,
      };

      setArticles(prev => [...prev, newArticle]);
      setAuthor('');
      setTitle('');
      setText('');
      setAlert(false);

      history.push('/');
    } else setAlert(true);
  };

  return (
    <DivOuter>
      <Form action='' onSubmit={createArticle}>
        <Input type='text' placeholder='Author' onChange={handleAuthor} value={author} autoFocus />
        <Input type='text' placeholder='Title' onChange={handleTitle} value={title} />
        <Textarea
          placeholder='Your markdown text ...'
          onChange={handleText}
          value={text}
        ></Textarea>

        {alert && <DivAlert>Please fill all boxes</DivAlert>}

        <Button type='submit'>Create article</Button>
      </Form>
    </DivOuter>
  );
};
