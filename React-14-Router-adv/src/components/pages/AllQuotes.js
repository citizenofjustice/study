import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: "p1", author: "Mark Twain", text: "Tom Sawyer" },
  { id: "p2", author: "Jonh Dowe", text: "Data migration" },
  { id: "p3", author: "Wane Stinson", text: "How to build a house" },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default AllQuotes;
