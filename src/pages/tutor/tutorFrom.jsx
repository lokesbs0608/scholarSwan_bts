import React from "react";
import "../../components/EnquiryFrom/index.scss";
import CustomInput from "../../components/CustomInput";
import CustomSelectionInput from "../../components/CustomSelectionInput";

const TutorEnquiryForm = (props) => {
  return (
    <div className="rounded">
      <div className="enquiry-form  ">
        <div className="container">
          <div className="form-header">
            <h2 dangerouslySetInnerHTML={{ __html: props.heading }} />
          </div>
          <div className="input-container">
            <form>
              <div className="p-1">
                <CustomInput placeHolder={"Full Name"} />
              </div>
              <div className="p-1">
                <CustomInput placeHolder={"Qualification"} />
              </div>
              <div className="p-1">
                <CustomSelectionInput
                  options={["BE", "YES"]}
                  placeHolder={"Choose curriculum"}
                />
              </div>
              <div className=" p-1">
                <CustomSelectionInput
                  options={["A", "B"]}
                  placeHolder={"Choose grade for teaching"}
                />
              </div>

              <div className="m-0 p-1">
                <CustomSelectionInput
                  options={["STATE", "Central"]}
                  placeHolder={"Choose subject"}
                />
              </div>

              <div className="row p-0 m-0">
                <div className="col-3 m-0 p-1">
                  <CustomSelectionInput
                    options={["+91", "+2"]}
                    placeHolder={"Country Code"}
                  />
                </div>
                <div className="col-9 m-0 p-1">
                  <CustomInput placeHolder={"Mobile Number"} type={"number"} />
                </div>
              </div>

              <div>
                <CustomInput placeHolder={"Email Id"} type={"email"} />
              </div>

              <div className="row p-0">
                <div className="col-6 m-0 p-1">
                  <CustomInput placeHolder={"City"} />
                </div>
                <div className="col-6 m-0 p-1">
                  <CustomInput placeHolder={"Pincode"} type={"number"} />
                </div>
              </div>

              <div className="m-2">
                <textarea placeholder="Address"></textarea>
              </div>
            </form>

            <div className="text-section">
              <p>
                {" "}
                By pressing Submit, I confirm that, I have read and understood
                the <a>Terms of Use</a> and agree to them.
              </p>
            </div>
            <div className="form-footer">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorEnquiryForm;
