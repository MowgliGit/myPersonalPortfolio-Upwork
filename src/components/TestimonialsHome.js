import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const testimonials = [
  {
    id: 1,
    text: "Marina built an amazing website for my business! It looks great, runs smoothly, and works perfectly on any device. I don’t have to worry about a thing—she keeps everything updated and secure so I can focus on growing my business.",
  },
  {
    id: 2,
    text: "I love my website! It’s modern, fast, and super easy to use. Marina really thought about how people will interact with it, and it shows. Everything just works perfectly!",
  },
  {
    id: 3,
    text: "I had no idea what I needed, but Marina guided me through everything. The result? A website that looks stunning and works flawlessly. I don’t have to stress about updates—she handles everything for me!",
  },
  {
    id: 4,
    text: "Working with Marina was a awesome! My site is smooth, interactive, and totally hassle-free. She’s always there to fix issues and keep things running, which saves me so much time!",
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
