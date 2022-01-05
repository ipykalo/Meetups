import { ObjectId, MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupsDetailsPage = props => {
  return <MeetupDetail
    image={props.detail.image}
    title={props.detail.title}
    address={props.detail.address}
    description={props.detail.description}
  />
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://ipyka:12457800@cluster0.toaib.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetups = await db.collection('meetups').find({}, { _id: 1 }).toArray();
  const paths = meetups.map(item => ({ params: { meetupId: item._id.toString() } }));
  client.close();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect('mongodb+srv://ipyka:12457800@cluster0.toaib.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetup = await db.collection('meetups').findOne({ _id: ObjectId(context.params.meetupId) });
  client.close();

  return {
    props: {
      detail: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }
    }
  }
}

export default MeetupsDetailsPage;