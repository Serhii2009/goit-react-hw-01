export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <div>
        <p>{followers}</p>
        <p>{views}</p>
        <p>{likes}</p>
      </div>
    </div>
  );
};
