import { Link } from "react-router-dom";

interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark }) => {
  const imageUrl = import.meta.env.BASE_URL;
  return (
    <>
      <Link to="/">
        {isDark ? (
          <img
            className=" cursor-pointer"
            height="110"
            width="110"
            alt="Avatar"
            src={`${imageUrl}src/assets/images/logo-light.png`}
          />
        ) : (
          <img
            className=" cursor-pointer"
            height="110"
            width="110"
            alt="Avatar"
            src={`${imageUrl}src/assets/images/logo-dark.png`}
          />
        )}
      </Link>
    </>
  );
};

export default Logo;
