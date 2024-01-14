export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>{followers}</li>
        <li>{views}</li>
        <li>{likes}</li>
      </ul>
    </div>
  );
};
