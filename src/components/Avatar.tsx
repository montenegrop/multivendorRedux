export const Avatar = ({ image_url }) => {
  return <div className="avatar" style={{ backgroundImage: `url(${image_url})` }}></div>
}
