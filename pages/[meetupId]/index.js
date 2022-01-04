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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      detail: {
        id: context.params.meetupId,
        image: 'https://i2.wp.com/girleatworld.net/wp-content/uploads/2017/12/6108ee0e-1bab-4162-98d3-5665437ae13d.jpg?fit=1400%2C1050&ssl=1',
        title: 'First Meetup',
        address: 'Some street 5',
        description: 'Some Description'
      }
    }
  }
}

export default MeetupsDetailsPage;