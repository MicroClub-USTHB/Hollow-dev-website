import FaqItem from "../../components/FAQ/FaqItem.tsx";

function Faq() {
    const cardsText = [
        {
          frontCard: "How many members should be in a team?",
          backCard: "Each team must consist of exactly 4 members. Individual participations are not allowed"
        },
       {
            frontCard: "How long does the competition last?",
            backCard: "The competition lasts for 5 days, starting from [start date/time] to [end date/time]."
        },
       {
            frontCard: "Can beginners participate?",
            backCard: "Yes, the competition is open to participants of all levels. The 9 challenges range from easy to more advanced topics"
        },
       {
            frontCard: "How is the winner determined?",
            backCard: "Winners are selected by a panel of jury"
        },
       {
            frontCard: "How many challenges do I need to complete?",
            backCard: "While completing more challenges can enhance your chances of winning, you are required to complete at least one challenge."
        },
       {
            frontCard: "Are there any restrictions on the technology stack or programming languages?",
            backCard: "No, you are free to use any technology stack or programming language to complete the challenges."
        }
      ]

      
    return (
        <div className="relative h-full w-full m-10 space-y-20">
            <h1 className="text-xl text-center">Frequently Asked Questions</h1>
            <div className="flex justify-center align-center">
                <div className="grid grid-cols-3 gap-10">
                {cardsText.map((card) => (
            <FaqItem FrontText={card.frontCard} BackText={card.backCard} />
            ))}
                </div>
            </div>
        </div>
    )
}

export default Faq