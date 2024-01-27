import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Welcome to your personal PhoneBook !</p>
      {/* <img
        src="https://media.istockphoto.com/id/1150386831/vector/people-friends-man-and-woman-chatting-talking-by-smartphone-internet-online-communication.jpg?s=612x612&w=0&k=20&c=cKkVqY7e0WkKE_XHoWC32-bvuPgh0TK7TALmBANsTtM="
        alt=""
        width="700"
        height="700"
      ></img> */}
    </div>
  );
};

export default Home;
