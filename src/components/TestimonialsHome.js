import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const testimonials = [
  {
    id: 1,
    text: "I was blown away by how amazing my website turned out! It’s not just beautiful but also works perfectly on any device. It’s like magic how everything just fits together, from the design to the speed. I never realized how important these things were until I saw my site in action. It’s clear this developer really knows their stuff and cares about making everything look and work just right.",
  },
  {
    id: 2,
    text: "I couldn’t be happier with the website! It’s exactly what I needed both beautiful and easy to use. Everything is so simple and intuitive, and it’s clear that a lot of thought went into how users will interact with the site. I love how modern it looks, and it works perfectly on my phone, tablet, and computer. You can tell they’re passionate about making sure every detail is spot on.",
  },
  {
    id: 3,
    text: "The experience with this developer was fantastic. She created a website that’s not only interactive but also super easy to navigate. I was amazed at how well everything flowed, and it felt like the site was designed just for me. It’s clear they stay on top of the latest trends because my website feels fresh and modern. I didn’t even know what ‘responsive’ meant before, but now I see how important it is!",
  },
  {
    id: 4,
    text: "This developer took a complex idea and turned it into something visually stunning and easy to use. The website is interactive and smooth, and it really stands out. I never knew how much work went into making sure everything works perfectly, but they really made it happen. Every time I had a question, they were quick to help and made sure the site performed great. I’m really impressed with their dedication to getting everything just right.",
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
