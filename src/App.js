import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout';
import QuoteForm from './components/quotes/QuoteForm'
//import QuoteItem from './components/quotes/QuoteItem'
import QuoteList from './components/quotes/QuoteList'
import HighlitedQuote from './components/quotes/HighlightedQuote'
import PageNotFound from './components/Pages/NotFound'
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

const onAddQuote = (data) => {
  console.log(data)
}

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/quotelist"}></Redirect>
          </Route>
          <Route path={"/add-new-quote"} exact>
            <QuoteForm onAddQuote={onAddQuote} />
          </Route>
          <Route path={"/quotelist"} exact>
            <QuoteList quotes={Dummy_Quotes} />
          </Route>
          <Route path={"/quotelist/:quoteID"}>
            <HighlitedQuote />
          </Route>
          <Route path={'*'}>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
