import NewMeetupForm from "../../components/meetups/NewMeetupForm";


const NewMeetupPage = () => {

  const onAddMeetup = formData => {
    console.log(formData);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}

export default NewMeetupPage;