import classes from './HighlightedQuote.module.css';
import { useParams } from 'react-router-dom';
import NoQuotesFound from './NoQuotesFound'
const HighlightedQuote = (props) => {
  const parms = useParams();
  const Dummy_Quotes = [{
    id: 'q1',
    text: 'Test1',
    author: "rohit1"
  },
  {
    id: 'q2',
    text: 'Test2',
    author: "rohit2"
  }]
  const quote = Dummy_Quotes.find(item => item.id === parms.quoteID)
  if (!quote) return <NoQuotesFound></NoQuotesFound>
  return (
    <figure className={classes.quote}>
      {/* <p>{props.text}</p>
      <figcaption>{props.author}</figcaption> */}
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>

    </figure>
  );
};

export default HighlightedQuote;
