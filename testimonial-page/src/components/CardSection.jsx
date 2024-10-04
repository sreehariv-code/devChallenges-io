import { google_logo, meta_logo } from "../constants/constant";
import Card from "./Card";

const cardData = [
  {
    id: 1001,
    name: "Samantha Lee",
    company_logo: google_logo,
    testimonial: "The checklist ensures that the review process is thorough",
    no_of_stars: 4,
    className: "self-end",
  },
  {
    id: 1002,
    name: "Rachel Patel",
    company_logo: meta_logo,
    testimonial: "I highly recommend the Writecream Business Description",
    no_of_stars: 5,
    className: "",
  },
];

function CardSection() {
  return (
    <section className="mt-10 flex flex-col gap-10">
      {cardData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          company_logo={card.company_logo}
          testimonial={card.testimonial}
          no_of_stars={card.no_of_stars}
          className={card.className}
        />
      ))}
    </section>
  );
}

export default CardSection;
