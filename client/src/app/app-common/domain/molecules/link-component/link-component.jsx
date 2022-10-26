import Text from "../../atoms/text/text";
import { Link } from "react-router-dom";
import "./link-component.css";

export default function LinkComponent({to, textColor='', linkClass='', fs='6', fw='', text}) {
  return (
    <Link className={linkClass + ' text-decoration-none'} to={`${to}`}>
        <Text textColor={textColor} fs={fs} fw={fw} text={text}/>
    </Link>
  )
}
