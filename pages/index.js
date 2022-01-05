import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from 'mongodb';

const HomePage = props => {
  return (
    <>
      <Head>
        <title>NextJS APP</title>
        <meta 
          name="description"
          content="NextJS app with backend API"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://ipyka:12457800@cluster0.toaib.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const collection = await db.collection('meetups').find().toArray();
  const meetups = collection.map(item => {
    return {
      id: item._id.toString(),
      title: item.title,
      address: item.address,
      image: item.image,
      description: item.description
    }
  });
  client.close();

  return {
    props: {
      meetups
    },
    revalidate: 1
  }
}

export default HomePage;