import css from "./Home.module.css";



const Home = () => {

    return (
        <div className={css.wrapper}>
            {/* <h1 className={css.title}>People.Relationships.Actions</h1> */}
            <p className={css.text}>Welcome to your personal PhoneBook !</p>
            <img  src="https://img.freepik.com/premium-vector/vector-illustration-person-carrying-mobile-phone-business-concept_492281-3979.jpg" alt="" width="700" height="700"></img>
</div>
//  https://www.shutterstock.com/image-vector/two-girls-talk-on-phone-600nw-1952146495.jpg
// src="https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-2586.jpg"
        // src="https://thumbs.dreamstime.com/b/two-people-man-woman-character-talking-smart-phone-online-communication-email-message-concept-video-call-business-chat-242889380.jpg"
       
    )
};

export default Home;
   
