import PropTypes from "prop-types";
import { google_logo, star_fill, star_outline } from "../constants/constant";

function Card({ name, company_logo, testimonial, className, no_of_stars = 4 }) {
  const total_no_of_stars = 5;
  return (
    <div
      className={`bg-white p-7 rounded-xl shadow-[0_0_20px_-15px_rgba(0,0,0,0.3)] max-w-[70%] ${className}`}
    >
      <section className="image-section flex gap-5 mb-2">
        <div className="max-w-[25%] md:max-w-[25%]">
          <img src={company_logo || google_logo} alt="company-logo" />
        </div>
        <div className="star-set flex items-start md:items-center">
          {Array.from({ length: total_no_of_stars }).map((_, index) => (
            <img
              key={index}
              src={index < no_of_stars ? star_fill : star_outline}
              alt="star"
              className="w-[15%] md:w-[30%]"
            />
          ))}
        </div>
      </section>
      <h2 className="name font-semibold text-body2 md:text-body my-1">
        {name || "Rachel Lee"}
      </h2>
      <p className="comment text-text-secondary text-list-item md:text-body">
        {testimonial ||
          "The checklist ensures that the review process is thorough"}
      </p>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  company_logo: PropTypes.string,
  testimonial: PropTypes.string,
  no_of_stars: PropTypes.number,
  className: PropTypes.string,
};
