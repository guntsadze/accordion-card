import "./App.css";
import { useState } from "react";
import AccordionItem from "./components/AccordionItem";

const img = {
  woman: "assets/illustration-woman-online-desktop.svg",
  box: "assets/illustration-box-desktop.svg",
};

function App() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(2);

  const DATA = [
    {
      itemNumber: 1,
      title: "How many team members can I invite?",
      content: "content 1",
    },
    {
      itemNumber: 2,
      title: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      itemNumber: 3,
      title: "How do I reset my password?",
      content: "content 3",
    },
    {
      itemNumber: 4,
      title: "Can I cancel my subscription?",
      content: "content 4",
    },
    {
      itemNumber: 5,
      title: "Do you provide additional support?",
      content: "content 5",
    },
  ];

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className="home">
      <div className="accordion-container">
        <div className="accordion-div">
          <div className="woman-div">
            <img className="woman" src={img.woman} />
            <img className="box" src={img.box} />
          </div>
          <div className="accordion-card">
            <h1> FAQ</h1>
            {DATA.map((data) => (
              <AccordionItem
                activeAccordionNumber={activeAccordionNumber}
                handleClick={handleClick}
                itemNumber={data.itemNumber}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
