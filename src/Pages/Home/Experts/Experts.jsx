import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: "Vicky Belly", img: "https://i.ibb.co/2NFQgcp/expert-1.jpg" },
    { id: 1, name: "Harshit Mehta", img: "https://i.ibb.co/YXS0Xnj/expert-2.jpg" },
    { id: 1, name: "Brad Johnson", img: "https://i.ibb.co/x6qN9nv/expert-3.jpg" },
    { id: 1, name: "Milar Ishak", img: "https://i.ibb.co/7WjW2n4/expert-4.jpg" },
    { id: 1, name: "Vinay Prote", img: "https://i.ibb.co/kcJpk8H/expert-5.jpg" },
    { id: 1, name: "Yung Chi", img: "https://i.ibb.co/F0trY6m/expert-6.png" },

]
const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-center text-bold mb-5 pt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;