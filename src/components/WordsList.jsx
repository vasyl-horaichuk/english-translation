import { useSelector } from 'react-redux';
import { selectorWords } from 'redux/selector';
import { WordsListItem } from './WordsListItem';

export const WordsList = () => {
  const words = useSelector(selectorWords);
  return (
    <ul>
      {words.map((word, ind) => (
        <WordsListItem word={word} key={word.id} number={ind + 1} />
      ))}
    </ul>
  );
};
