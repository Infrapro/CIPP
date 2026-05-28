import PropTypes from "prop-types";

export const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      role="img"
      aria-label="Infrapro logo"
    >
      <rect width="100" height="100" rx="16" fill="#0d6e7e" />
      <text
        x="50"
        y="47"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#ffffff"
      >
        Infra
      </text>
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="22"
        letterSpacing="3"
        fill="#ffffff"
      >
        PRO
      </text>
    </svg>
  );
};

Logo.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};
