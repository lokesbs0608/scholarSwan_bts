import React from 'react'
import './styles.scss'
// import Form from '../../Form/Form'
import Pricing from '../../../components/Pricing'
// import Enquiry from '../../Form/Enquiry'

const Service = ({ main_heading, backgroundImage, text_color, image, content1, sub_heading, content2, sub_section }) => {

    const background = `url(${backgroundImage})`;

    return (
        <>
            <div className="service">
                <section className="service-banner" style={{ "--background": background }}>
                    <div className="service-container container">
                        <div className="section">
                            <h2 style={{"--color": text_color}}>{main_heading}</h2>
                        </div>
                        <div className="section">
                            <img src={image} alt="service_img" className='img-fluid' />
                        </div>
                    </div>
                </section>
                <section className='form-section p-20'>
                    <div className="container flex-center">
                        <div className="section">
                            <div className="text-container" dangerouslySetInnerHTML={{ __html: content1 }} />
                        </div>
                        <div className="section">
                            {/* <Enquiry heading="<b>Enquiry</b> Form" /> */}
                        </div>
                    </div>
                </section>

                <section className="content-section p-20">
                    <div className="content-header">
                        <h2>Benefits of <span><b>{sub_heading}</b></span></h2>
                    </div>
                    <div className="content">
                        {sub_section.map((data) => (

                            <div className="container flex-center" key={data.id} >
                                <div className="section">
                                    <div className="image-container">
                                        <img src={data.image} alt="" />
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="text-container" dangerouslySetInnerHTML={{ __html: data.content }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {content2 ? <div className="container" dangerouslySetInnerHTML={{ __html: content2 }} /> : null}

                </section>
            </div>
            <Pricing main_heading={main_heading}/>
        </>
    )
}

export default Service;
