import ChecklistSection from "./ChecklistSection";

function ReviewSection() {
  return (
    <section className="md:w-1/2  min-h-full">
      <section className="intro flex flex-col gap-[1rem]">
        <div className="star bg-star-bg flex items-center justify-center rounded-full aspect-square max-w-[60px]">
          <span className="text-[20px] ">⭐️</span>
        </div>
        <h1 className=" text-heading font-semibold text-text-primary">
          Reviewers
        </h1>
        <p className="text-text-secondary text-body leading-7 md:max-w-[37ch] md:leading-8">
          Reviewers is where people can access guidelines, checklists, and other
          tools to assist them in reviewing papers or manuscripts. It provides a
          structured approach to ensure that the review process is thorough,
          efficient, and consistent.
        </p>
      </section>
      <ChecklistSection />
    </section>
  );
}

export default ReviewSection;
