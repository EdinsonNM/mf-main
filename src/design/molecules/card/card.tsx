import "./card.scss";

const Card = (props: {
  image: string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <a href={props.url}>
      <div className="card">
        <img src={props.image} alt="" />
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href="#" className="button">
            Find out more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </a>
  );
};
export default Card;
