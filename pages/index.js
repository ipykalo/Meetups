import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [{
  id: 'm1',
  title: 'First meetup',
  address: 'Some Street 5, Best City',
  image: 'https://i2.wp.com/girleatworld.net/wp-content/uploads/2017/12/6108ee0e-1bab-4162-98d3-5665437ae13d.jpg?fit=1400%2C1050&ssl=1'
}, {
  id: 'm2',
  title: 'Second meetup',
  address: 'Some Street 78, Best City 2',
  image: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Lviv/lviv-sehir-meydan.jpg'
}]

const HomePage = () => {
  return <MeetupList meetups={MEETUPS} />;
}

export default HomePage;