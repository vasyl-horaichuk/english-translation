import { useSelector } from 'react-redux';
import { selectFilteredWords } from 'redux/selectors';
import { WordsListItem } from './WordsListItem';

export const WordsList = () => {
  const words = useSelector(selectFilteredWords);
  return (
    <ul>
      {words.map((word, ind) => (
        <WordsListItem word={word} key={word.id} number={ind + 1} />
      ))}
    </ul>
  );
};
