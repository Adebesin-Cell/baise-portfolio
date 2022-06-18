import styles from "./Contact.module.scss";

const Contact = function () {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__left}>
          <h3 className={styles.contact__title}>
            <span className={styles["contact__title--green"]}>02.</span>
            <span className={styles["contact__title--green"]}>
              What's next?
            </span>
          </h3>
        </div>
      </div>
      <h1 className={styles.contact__heading}>Get in touch</h1>
      <p className={styles.contact__paragraph}>
        I'm currently looking for connections. Kindly reach out to me if there
        are any. And if it is just to say hi, my inbox is always open. I will
        reply as soon as possible.
      </p>
      <div className={styles.contact__box}>
        <a
          href='mailto:ismailaabdulbaise@gmail.com'
          name='say hello'
          className={styles.contact__link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Say Hello
        </a>
      </div>
      <div className={styles.contact__socials}>
        <div className={styles.contact__icon}>
          <a href='https://twitter.com/Kingfundz1?t=znm7HJ1Kk0mbHJ2UMlL-9w&s=09'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>
        <div className={styles.contact__icon}>
          <a href='https://wa.link/83l2ja'>
            <i class='fab fa-whatsapp'></i>
          </a>
        </div>
        <div className={styles.contact__icon}>
          <a href='/'>
            <i class='fab fa-telegram'></i>
          </a>
        </div>
        <div className={styles.contact__icon}>
          <a href='/'>
            <i class='fab fa-facebook'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
