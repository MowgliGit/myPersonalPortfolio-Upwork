import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const testimonials = [
  {
    id: 1,
    text: "An exceptionally talented front-end developer with a keen eye for both design aesthetics and performance optimization. Their ability to bring creative ideas to life through clean, responsive, and well-structured code ensures that every project not only looks stunning but also functions flawlessly across all devices. Whether it's crafting pixel-perfect layouts or optimizing site speed, their expertise shines in every aspect of front-end development.",
  },
  {
    id: 2,
    text: "With an unwavering commitment to excellence, this developer crafts visually appealing and highly functional websites that prioritize user experience. Their meticulous attention to detail, coupled with a deep understanding of front-end technologies, allows them to deliver solutions that are not only beautiful but also intuitive and seamless for end users. Their passion for modern web development is evident in their ability to balance aesthetics with functionality effortlessly.",
  },
  {
    id: 3,
    text: "Passionate about creating immersive and engaging user experiences, this developer utilizes modern web technologies to build highly interactive and dynamic interfaces. Their dedication to precision and quality ensures that every project is polished to perfection, with a focus on usability, accessibility, and performance optimization. They constantly stay up to date with the latest industry trends, incorporating innovative techniques to enhance the overall browsing experience.",
  },
  {
    id: 4,
    text: "Transforms complex designs into smooth, interactive, and visually stunning websites. With a deep understanding of front-end frameworks, animations, and user interaction patterns, they ensure that every website they develop is not only functional but also captivating. Their ability to troubleshoot challenges and optimize performance makes them an invaluable asset to any development team, always striving for the highest standards in web design and development.",
  },
];

const TestimonialsHome = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  return (
    <section
      className={`section ${styles.sectionTestimonial}`}
      id="sectionTestimonials"
    >
      <div className={`container `}>
        <div className={styles.subTitle}>
          <h3 className={styles.headingTertiary}>Client Testimonials</h3>
          <span className={styles.line}></span>
        </div>
        <h3
          className={`${styles.headingQuaternaryTestimonials} ${styles.headingQuaternary}`}
        >
          What Some of My Clients Say
        </h3>

        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialContainer} ${
                testimonial.id === activeTestimonial ? styles.active : ""
              }`}
            >
              <div className={styles.progressBar}></div>

              <blockquote className={styles.testimonialBlockquote}>
                <p className={styles.testimonialText}>
                  {" "}
                  <i
                    className={`fas fa-quote-left ${styles.iconTestimonialLeft}`}
                  ></i>
                  {testimonial.text}
                  <i
                    className={`fas fa-quote-right ${styles.iconTestimonialRight}`}
                  ></i>
                </p>
              </blockquote>
            </div>
          ))}

          <div className={styles.btnContainer}>
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                className={`${styles.btnOperations} ${
                  testimonial.id === activeTestimonial ? styles.active : ""
                }`}
                onClick={() => setActiveTestimonial(testimonial.id)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHome;
