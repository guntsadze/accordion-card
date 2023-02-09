export default function AccordionItem(props) {
  const { activeAccordionNumber, handleClick, itemNumber, title, content } =
    props;

  return (
    <div className="content-div" onClick={() => handleClick(itemNumber)}>
      {title}
      {activeAccordionNumber === itemNumber ? (
        <p>{content}</p>
      ) : (
        <p className="anime">{content}</p>
      )}
    </div>
  );
}
