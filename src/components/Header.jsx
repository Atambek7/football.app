import categoryIcon from "../assets/images/categories/menu-svgrepo-com.svg.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header class="header">
        <div class="container">            
            <Link to="/categories" class="btn-category">
                <img src={categoryIcon} alt="Menu button"/>
            </Link>
        </div>
    </header>
    );
}

export default Header;