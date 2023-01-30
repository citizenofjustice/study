import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SanMiniatoAlMonte-Cimetiere.jpg/1024px-SanMiniatoAlMonte-Cimetiere.jpg",
    adress: "Some adress 5, 123123 Some city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SanMiniatoAlMonte-Cimetiere.jpg/1024px-SanMiniatoAlMonte-Cimetiere.jpg",
    adress: "Some adress 5, 321321 Some city",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
