import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Welcome to your personal PhoneBook !</p>
      <img
        src="https://img.freepik.com/premium-vector/vector-illustration-person-carrying-mobile-phone-business-concept_492281-3979.jpg"
        alt=""
        width="700"
        height="700"
      ></img>
    </div>
  );
};

export default Home;
