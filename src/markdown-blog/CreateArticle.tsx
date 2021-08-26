import { ButtonStyled, theme } from '../theme';
import { LogicStateContext } from './MarkdownBlog';
import { slugify } from './textHelpers';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const CreateArticle = () => {
  const { articles, setArticles } = useContext(LogicStateContext);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [errorAuthor, setErrorAuthor] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorText, setErrorText] = useState(false);
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
      setErrorAuthor(false);
      setErrorTitle(false);
      setErrorText(false);
      history.push('/');
    } else if (author === '') {
      setErrorAuthor(true);
      return;
    } else if (title === '') {
      setErrorTitle(true);
      return;
    } else if (text === '') {
      setErrorText(true);
      return;
    }
  };

  return (
    <DivOuter>
      <Form action='' onSubmit={createArticle}>
        <Input
          style={{ borderColor: errorAuthor ? theme.redColor : theme.blackColor }}
          type='text'
          placeholder='Author'
          onChange={handleAuthor}
          value={author}
          autoFocus
        />
        {errorAuthor && <DivAlert>Please fill an author name</DivAlert>}

        <Input
          style={{ borderColor: errorTitle ? theme.redColor : theme.blackColor }}
          type='text'
          placeholder='Title'
          onChange={handleTitle}
          value={title}
        />
        {errorTitle && <DivAlert>Please fill a title</DivAlert>}

        <Textarea
          style={{ borderColor: errorText ? theme.redColor : theme.blackColor }}
          placeholder='Your markdown text ...'
          onChange={handleText}
          value={text}
        ></Textarea>
        {errorText && <DivAlert>Please fill your markdown text</DivAlert>}

        <Button type='submit'>Create article</Button>
      </Form>
    </DivOuter>
  );
};

const DivOuter = styled.div({
  marginBottom: '50px',
});

const DivAlert = styled.div({
  color: theme.redColor,
  fontWeight: 'bold',
  marginBottom: '7px',
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

const Button = ButtonStyled;
