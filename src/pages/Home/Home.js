import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Welcome to your personal PhoneBook !</p>
      <img
        src="https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg"
        alt="Office workers"
        width="700"
        height="600"
      ></img>
    </div>
  );
};

export default Home;
