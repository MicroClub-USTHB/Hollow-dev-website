import FaqItem from "../../components/FAQ/FaqItem.tsx";
import Up from "/assets/faq-up.png";
import Down from "/assets/faq-down.png";

const cardsText = [
  {
    id: 0,
    frontText: "How many members should be in a team?",
    backText:
      "Each team must consist of exactly 4 members. Individual participations are not allowed.",
  },
  {
    id: 1,

    frontText: "How long does the competition last?",
    backText: "The competition lasts for 5 days, starting from 04 to 08 July.",
  },
  {
    id: 2,

    frontText: "Can beginners participate?",
    backText:
      "Yes, the competition is open to participants of all levels. The 9 challenges range from easy to more advanced topics.",
  },
  {
    id: 3,

    frontText: "How is the winner determined?",
    backText: "Winners are selected by a panel of jury.",
  },
  {
    id: 4,

    frontText: "How many challenges do I need to complete?",
    backText:
      "While completing more challenges can enhance your chances of winning, you are required to complete at least one challenge.",
  },
  {
    id: 5,

    frontText:
      "Are there any restrictions on the technology stack or programming languages?",
    backText:
      "No, you are free to use any technology stack or programming language to complete the challenges.",
  },
];

function Faq() {
  return (
    <div id="faq" className="relative h-full w-full space-y-10 md:space-y-20">
      <div className="flex items-center flex-col gap-2">
        <img src={Up} className="w-80" />
        <h1 className="text-xl text-center">Frequently Asked Questions</h1>
        <img src={Down} className=" w-64" />
      </div>
      <div className="flex justify-center align-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  md:gap-20">
          {cardsText.map((card) => (
            <FaqItem
              key={card.id}
              frontText={card.frontText}
              backText={card.backText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
