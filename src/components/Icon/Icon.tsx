import {HandySvg} from 'handy-svg';
import iconSrc from '../../img/svg/computer.svg'


const Icon = () => (
  <HandySvg
      src={iconSrc}
      className="icon"
      width="32"
      height="32"
  />
);

export default Icon;