
import Brand_category from "../Components/brand_category/brand_category";
import CategoriesCarts from "../Components/CategoriesCarts/CategoriesCarts";
import Footer from "../Components/Footer/Footer";
import OurClients from "../Components/OurClients/OurClients";
import SwiperSlider from "../Components/SwiperSlider/SwiperSlider";
// import Slider from "../Components/Slider/Slider";


const Home = () => {
    return (
        <div>
           <SwiperSlider></SwiperSlider>
            {/* <Slider></Slider> */}
            <CategoriesCarts></CategoriesCarts>
            <OurClients></OurClients>
            <Brand_category></Brand_category>
            <Footer></Footer>
        </div>
    );
};

export default Home;