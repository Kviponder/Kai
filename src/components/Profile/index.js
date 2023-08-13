import KaiGar from "../../assets/Images/KaiGar.jpeg";

function ProfileImage() {
  return (
    <img
      className="profileImage img rounded responsive"
      src={KaiGar}
      alt="Profile of KaiGar"
    />
  );
}
export default ProfileImage;
