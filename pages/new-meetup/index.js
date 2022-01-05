import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const onAddMeetup = formData => {
    if (!formData) {
      alert('Please fill all required fields.');
      return;
    }
    fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        alert('Sthomthing went wrong.');
      });
  }
  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}

export default NewMeetupPage;