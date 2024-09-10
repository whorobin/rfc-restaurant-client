
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Populer Items"
            ></SectionTitle>

            <div className="text-center mt-4">
                <button className="btn btn-outline border-0 border-b-4 mt-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;