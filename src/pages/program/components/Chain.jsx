// import React from 'react'
// import "./Chain.scss";

// const Chain = () => {
//     const column_1 = [
//         { value: "01", label: "Contact scholarSwan" },
//         { value: "03", label: "Prepare student study plan" },
//         { value: "05", label: "Revise & Recall the Concepts" },
//         { value: "07", label: "Track the students Improvement by scientific method" },
//         { value: "09", label: "Feedback by students & parents" }
//     ];
//     const column_2 = [
//         { label: "Discuss, Analysis, Counseling the student", value: "02" },
//         { label: "Classes by Expert Tutor", value: "04" },
//         { label: "Conduct periodic test & mock tests, unit test.", value: "06" },
//         { label: "Get certified by ScholarSwan", value: "08" }
//     ];

//     const mappingData = [
//         { value: "01", label: "Contact scholarSwan", image: '/one.svg', left: '/left.svg' },
//         { value: "02", label: "Discuss, Analysis, Counseling the student", image: '/two.svg', right: '/right.svg' },
//         { value: "03", label: "Prepare student study plan", image: '/three.svg', left: '/left.svg' },
//         { value: "04", label: "Classes by Expert Tutor", image: '/four.svg', right: '/right.svg' },
//         { value: "05", label: "Revise & Recall the Concepts", image: '/five.svg', left: '/left.svg' },
//         { value: "06", label: "Conduct periodic test & mock tests, unit test.", image: '/six.svg', right: '/right.svg' },
//         { value: "07", label: "Track the students Improvement by scientific method", image: '/seven.svg', left: '/left.svg' },
//         { value: "08", label: "Get certified by ScholarSwan", image: '/eight.svg', right: '/right.svg' },
//         { value: "09", label: "Feedback by students & parents", image: '/9.svg', left: '/left.svg' },
//     ]


//     return (
//         <>
//         <div className='program_step'>
//         <div className="thinking_img">
//            <img className='think-img' src="/Thinking-face-cuate.png" alt="" />
//         </div>
//             <div className="big_chain">
//                 <div className='chain_data'>
//                     {mappingData.map((item, i) => (
//                         <div key={i} className='chain_values'>
//                             {i % 2 === 0 ? (
//                                 <>
//                                     <h1 className='chain_number'>{item.value}</h1>
//                                     <div className='image_content'>
//                                         <img  src={item?.left} alt="" />
//                                         <img className='fit-to-container'   src={item.image} alt="" />
//                                     </div>
//                                     <p className='chain_label'>{item.label}</p>
//                                 </>
//                             ) : (
//                                 <>
//                                     <p className='chain_label'>{item.label}</p>
//                                     <div className='image_content'>
//                                         <img src={item.image} alt="" />
//                                         <img  src={item?.right} alt="" />
//                                     </div>
//                                     <h1 className='chain_number'>{item.value}</h1>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="long_chain">
//                     <img src="/chainImage.png" className='html-structure' alt="" />
//                 </div>
//             </div>

//             <div div className='thinking_img' >
//                 <img className='think-img' src="/Light-bulb-cuate.png" alt="" />
//             </div>
//             </div>
//         </>
//     )
// }

// export default Chain

import React from 'react'
import "./Chain.scss";

const Chain = () => {
    // const column_1 = ["01", "Contact scholarSwan", "03", "Prepare student study plan", "05", "Revise & Recall the Concepts", "07", "Track the students Improvement by scientific method", "09", "Feedback by students & parents"]
    const column_1 = [
        { value: "01", label: "Contact scholarSwan" },
        { value: "03", label: "Prepare student study plan" },
        { value: "05", label: "Revise & Recall the Concepts" },
        { value: "07", label: "Track the students Improvement by scientific method" },
        { value: "09", label: "Feedback by students & parents" }
    ];
    // const column_2 = ["Discuss, Analysis, Counseling the student", "02", "Classes by Expert Tutor", "04", "Conduct periodic test & mock tests, unit test.", "06", "Get certified by ScholarSwan", "08",]
    const column_2 = [
        { label: "Discuss, Analysis, Counseling the student", value: "02" },
        { label: "Classes by Expert Tutor", value: "04" },
        { label: "Conduct periodic test & mock tests, unit test.", value: "06" },
        { label: "Get certified by ScholarSwan", value: "08" }
    ];

    const mappingData = [
        { value: "01", label: "Contact scholarSwan", image: '/one.svg' },
        { value: "02", label: "Discuss, Analysis, Counseling the student", image: '/two.svg' },
        { value: "03", label: "Prepare student study plan", image: '/three.svg' },
        { value: "04", label: "Classes by Expert Tutor", image: '/four.svg' },
        { value: "05", label: "Revise & Recall the Concepts", image: '/five.svg' },
        { value: "06", label: "Conduct periodic test & mock tests, unit test.", image: '/six.svg' },
        { value: "07", label: "Track the students Improvement by scientific method", image: '/seven.svg' },
        { value: "08", label: "Get certified by ScholarSwan", image: '/eight.svg' },
        { value: "09", label: "Feedback by students & parents", image: '/9.svg' },
    ]


    return (
        <>

            <div className="big_chain">
                <div className='thinking'>
                    <div className='thinking_img'>
                        <img src="/Thinking-face-cuate.png" alt="" />
                    </div>
                </div>
                <div className='chain_data'>
                    <div className='newDiv'>
                        {
                            mappingData.map((item, i) => (
                                <div key={i} className='chain_values'>
                                    {i % 2 === 0 ? (
                                        <>
                                            <div className='chain_numberArea'>
                                                <h1 className='chain_number'>{item.value}</h1>
                                            </div>

                                            <div className='chain_labelArea'>
                                                <p className='chain_label'>{item.label}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='chain_labelArea'>
                                                <p className='chain_label'>{item.label}</p>
                                            </div>

                                            <div className='chain_numberArea'>
                                                <h1 className='chain_number'>{item.value}</h1>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))
                        }
                        <div className="long_chain">
                            <img src="/Group 66.svg" className='html_structure' alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='thinking_img' >
                    <img src="/Light-bulb-cuate.png" alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Chain