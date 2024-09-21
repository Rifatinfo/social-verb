import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Carts from "../Carts/Carts";

const CategoriesCarts = () => {
    const carts = useLoaderData(); // Data fetched from loader
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if (carts) {
            setCategories(carts);
        }
    }, [carts]);

    console.log(carts);
    return (

        <div className="p-5 bg-[#212529]">
            <div className="mt-16">
                <h1 className="text-5xl text-center text-white">WHAT WE DO</h1>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:max-w-6xl mx-auto md:max-w-6xl md:mx-auto ">
                {
                    categories.map(cart => <Carts key={cart.id} cart={cart}></Carts>)
                }
            </div>
        </div>
    );
};

export default CategoriesCarts;
