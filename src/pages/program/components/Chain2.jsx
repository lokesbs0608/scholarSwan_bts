// import React from 'react'
// import './Chain2.scss'

// const Chain2 = () => {
//     const mappingData = [
//         { value: "01", label: "Contact scholarSwan", image: '/one.svg' },
//         { value: "02", label: "Discuss, Analysis, Counseling the student", image: '/two.svg' },
//         { value: "03", label: "Prepare student study plan", image: '/three.svg' },
//         { value: "04", label: "Classes by Expert Tutor", image: '/four.svg' },
//         { value: "05", label: "Revise & Recall the Concepts", image: '/five.svg' },
//         { value: "06", label: "Conduct periodic test & mock tests, unit test.", image: '/six.svg' },
//         { value: "07", label: "Track the students Improvement by scientific method", image: '/seven.svg' },
//         { value: "08", label: "Get certified by ScholarSwan", image: '/eight.svg' },
//         { value: "09", label: "Feedback by students & parents", image: '/9.svg' },
//     ]
//     return (
//         <div id='all_chain' >
//             <div className='think_image'>
//                 <div className='think_img'>
//                     <img src="/Thinking-face-cuate.png" alt="" />
//                 </div>
//             </div>
//             <div className='dummy'>

//             </div>
//             <div className='chain_data'>
//                 <div className='newDiv'>
//                     {
//                         mappingData.map((item, i) => (
//                             <div key={i} className='chain_values'>
//                                 {i % 2 === 0 ? (
//                                     <>
//                                         <div className='chain_numberArea'>
//                                             <h1 className='chain_number'>{item.value}</h1>
//                                         </div>

//                                         <div className='chain_labelArea'>
//                                             <p className='chain_label'>{item.label}</p>
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className='chain_labelArea'>
//                                             <p className='chain_label'>{item.label}</p>
//                                         </div>

//                                         <div className='chain_numberArea'>
//                                             <h1 className='chain_number'>{item.value}</h1>
//                                         </div>
//                                     </>
//                                 )}

//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className="long_chain">
//                     <img src="/Group 66.svg" className='html_structure' alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Chain2\
import React from 'react'
import './Chain2.scss'
const Chain2 = () => {
    const mappingData = [
        { value: "01", label: "Contact scholarSwan" },
        { value: "02", label: "Discuss, Analysis, Counseling the student" },
        { value: "03", label: "Prepare student study plan" },
        { value: "04", label: "Classes by Expert Tutor" },
        { value: "05", label: "Revise & Recall the Concepts" },
        { value: "06", label: "Conduct periodic test & mock tests, unit test." },
        { value: "07", label: "Track the students Improvement by scientific method" },
        { value: "08", label: "Get certified by ScholarSwan" },
        { value: "09", label: "Feedback by students & parents" },
    ]
    return (
        <>
            <div id='chain_position' className='chain_parent'>
                <div className='think_img'>
                    <img src="/Thinking-face-cuate.png" alt="" />
                </div>
                <div className='chain_data'>
                    <div className='all_content'>
                        {
                            mappingData.map((item, i) => (
                                <div key={i} className='chain_values'>
                                    {i % 2 === 0 ? (
                                        <>
                                            <div className='chain_numberArea'>
                                                <h1 className='chain_number'>{item.value}</h1>
                                            </div>
                                            <div className='chain_labelArea '>
                                                <p className='chain_label_end'>{item.label}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='chain_labelArea1'>
                                                <p className='chain_label'>{item.label}</p>
                                            </div>
                                            <div className='chain_numberArea'>
                                                <h1 className='chain_number1'>{item.value}</h1>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="long_chain">
                    <img src="/Group 66.svg" className='html_structure' width="600" height="400" alt="" />
                </div>
                <div className='think_img'>
                    <img src="/Light-bulb-cuate.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default Chain2