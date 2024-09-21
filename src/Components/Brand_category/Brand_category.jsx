import { useEffect, useState } from "react";

const Brand_category = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div className="max-w-6xl mx-auto">
            {projects.length}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="relative group">

                        {/* Background Image */}
                        <div
                            className="relative h-96  bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image_url})` }}
                        >
                            {/* Set the z-index to ensure the image is above the text */}
                            <img src={project.image_url} alt={project.title} className="opacity-0 z-10" />
                        </div>

                        {/* Hidden Text Div to Show on Hover bg-black bg-opacity-75 */}
                        <div
                            className="absolute inset-0 bg-red-800 bg-opacity-100 flex flex-col justify-center items-center z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <h1 className="text-white">{project.category}</h1>
                            <p className="text-white text-3xl font-bold">{project.title}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Brand_category;
