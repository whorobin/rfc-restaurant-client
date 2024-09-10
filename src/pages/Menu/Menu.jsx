import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImage from '../../assets/menu/menu-bg.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>RFC | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="our menu"></Cover>

            {/* main cover  */}

            <SectionTitle
                subHeading="Don't miss" heading="Today's offer"
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert  */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImage}
            ></MenuCategory>

            {/* pizza  */}
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImage}
            ></MenuCategory>

            {/* salad  */}

            <MenuCategory
                items={salad}
                title={"salad"}
                img={saladImage}
            ></MenuCategory>

            {/* soup  */}
            <MenuCategory
                items={soup}
                title={"soup"}
                img={soupImage}
            ></MenuCategory>
        </div >
    );
};

export default Menu;