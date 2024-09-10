
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-6 my-20 '>
            <SectionTitle
                heading="featured item"
                subHeading="Check it out"
            ></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-16 bg-slate-700 bg-opacity-30'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>

                <div className='md:ml-10'>
                    <p>Aug 20,2025</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-2">Order naw</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;