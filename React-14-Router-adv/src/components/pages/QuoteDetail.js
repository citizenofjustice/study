import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const DUMMY_DATA = [
  { id: "p1", author: "Mark Twain", text: "Tom Sawyer" },
  { id: "p2", author: "Jonh Dowe", text: "Data migration" },
  { id: "p3", author: "Wane Stinson", text: "How to build a house" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
