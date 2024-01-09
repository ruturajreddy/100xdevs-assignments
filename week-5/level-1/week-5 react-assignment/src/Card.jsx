const Card = ({ id, name, description, interests, socialMedia }) => {
  return (
    <>
      <div className="container">
        <h2>{name}</h2>
        <h4 className="lightweight">{description}</h4>
        <h4>Interests</h4>
        <ul>
          {interests.map((item, index) => (
            <li className="lightweight" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {socialMedia.map((item, index) => (
          <button className="btn" key={index}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Card;
