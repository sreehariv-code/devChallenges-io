import { checklist } from "../constants/constant";

const checklistItems = [
  {
    id: 1,
    content: "Checklist to Review an Academic Paper",
  },
  {
    id: 2,
    content: "Peer Review Checklist",
  },
  {
    id: 3,
    content: "Checklist for Editors, Reviewers, and Authors of SPIE Journals",
  },
];
function ChecklistSection() {
  return (
    <section className="checklist mt-5 py-2">
      <ul className="flex flex-col gap-[0.25rem] text-text-secondary">
        {checklistItems.map((item) => (
          <li key={item.id} className="flex leading-7 text-body2">
            <img src={checklist} alt="check" />
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChecklistSection;
