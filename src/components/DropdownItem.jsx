import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const DropdownItem = (props) => {
  return (
    <p className="text-[18px]">
      {props.title}
      <FontAwesomeIcon icon={faChevronDown} />
    </p>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
};
