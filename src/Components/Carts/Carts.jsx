
const Carts = ({ cart }) => {
    const { icon, title, description } = cart;

    return (
        <div >
            <div className="h-48 flex items-start gap-4 p-4 bg-white hover:bg-red-600 hover:bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="flex-shrink-0">
                    <img src={icon} alt="icon" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-4 ">
                    <p className="text-2xl font-semibold text-gray-900 hover:text-white">{title}</p>
                    <p className="text-xl text-gray-600 hover:text-white">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default Carts;