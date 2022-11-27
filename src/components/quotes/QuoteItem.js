import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';
//import HighlightedQuote from './HighlightedQuote'
//import Comments from '../comments/Comments'
const QuoteItem = (props) => {
  // const parms = useParams();
 
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotelist/${props.id}`} className='btn'>
        View Fullscreen
      </Link>


    </li>
  );
};

export default QuoteItem;
