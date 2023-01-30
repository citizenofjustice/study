import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SanMiniatoAlMonte-Cimetiere.jpg/1024px-SanMiniatoAlMonte-Cimetiere.jpg"
      title="A first meetup"
      address="Some adress 5, 123123 Some city"
      description="the meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SanMiniatoAlMonte-Cimetiere.jpg/1024px-SanMiniatoAlMonte-Cimetiere.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some adress 5, 123123 Some city",
        description: "the meetup description",
      },
    },
  };
}

export default MeetupDetails;
