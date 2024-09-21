import clients1 from '../../assets/ACC_1.png'
import clients2 from '../../assets/Akij_2.png'
import clients3 from '../../assets/Colourrose_3.png'
import clients4 from '../../assets/Marcel_4.png'
import clients5 from '../../assets/Nestle_5.png'
import clients6 from '../../assets/Pran_6.png'
import clients7 from '../../assets/RFL_7.png'
import clients8 from '../../assets/SSG_8.png'
import clients9 from '../../assets/Teletalk_9.png'
import clients10 from '../../assets/UNDP_10.png'
import clients11 from '../../assets/Unilever_11.png'
import clients12 from '../../assets/Vision_12.png'

const OurClients = () => {
    return (
        <div className='mt-6 max-w-6xl mx-auto'>
            <div className='mt-28 mb-10'>
                <h1 className='text-center text-3xl font-bold md:text-3xl lg:text-4xl'>Our Clients</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-4'>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients2} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients3} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients4} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients5} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients6} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients7} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients8} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients9} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients10} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients11} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients12} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="relative flex items-center justify-center p-10  hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
                    <img src={clients1} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>

            </div>
        </div>
    );
};

export default OurClients;
