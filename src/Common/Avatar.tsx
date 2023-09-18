const Avatar = () => {
  const imageUrl = import.meta.env.BASE_URL;
  return (
    <img
      className="h-[32px] w-[32px] rounded-full"
      alt="Avatar"
      src={`${imageUrl}src/assets/images/users/avatar-1.jpg`}
    />
  );
};

export default Avatar;
