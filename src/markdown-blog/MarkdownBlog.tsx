import { BlogNavigation } from './BlogNavigation';
import { genericHookContextBuilder } from './genericHookContextBuilder';
import { useLocalStorage } from './useLocalStorage';

const useLogicState = () => {
  const [articles, setArticles] = useLocalStorage('articles', [
    {
      id: 0,
      author: 'Unnamed author',
      title: 'Testing context',
      slug: 'testing-context',
      text: 'Markdown blog to learn context in React ...',
    },
  ]);

  return {
    articles,
    setArticles,
  };
};

export const { ContextProvider: LogicStateContextProvider, Context: LogicStateContext } =
  genericHookContextBuilder(useLogicState);

export const MarkdownBlog = () => {
  return (
    <LogicStateContextProvider>
      <BlogNavigation />
    </LogicStateContextProvider>
  );
};
