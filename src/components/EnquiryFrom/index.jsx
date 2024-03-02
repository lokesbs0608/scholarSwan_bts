import React from "react";
import "./index.scss";
import CustomInput from "../CustomInput";
import CustomSelectionInput from "../CustomSelectionInput";
const EnquiryForm = (props) => {
  return (
    <div className="rounded">
      <div className="enquiry-form  ">
        <div className="container">
          <div className="form-header">
            <h2 dangerouslySetInnerHTML={{ __html: props.heading }} />
          </div>
          <div className="input-container">
            <form>
              <div className="px-1">
                <CustomInput placeHolder={"Student Name"} />
              </div>
              <div className="px-1">
                <CustomInput placeHolder={"Parent's Name"} />
              </div>

              <div className="row p-0 m-0">
                <div className="col-sm-12 col-lg-6 m-0 px-1">
                  <CustomSelectionInput
                    options={["BE", "YES"]}
                    placeHolder={"Choose Grade"}
                  />
                </div>
                <div className="col-sm-12 col-lg-6 m-0 px-1">
                  <CustomSelectionInput
                    options={["A", "B"]}
                    placeHolder={"Choose Subject"}
                  />
                </div>
              </div>

              <div className="m-0 px-1">
                <CustomSelectionInput
                  options={["STATE", "Central"]}
                  placeHolder={"Choose curriculum"}
                />
              </div>

              <div className="row p-0 m-0">
                <div className="col-sm-4 col-3  m-0 px-1">
                  <CustomSelectionInput
                    options={["+91", "+2"]}
                    placeHolder={"Choose curriculum"}
                  />
                </div>
                <div className="col-sm-8 col-9  m-0 px-1">
                  <CustomInput placeHolder={"Mobile Number"} type={"number"} />
                </div>
              </div>

              <div className="m-0 px-1">
                <CustomInput placeHolder={"Email Id"} type={"email"} />
              </div>

              <div className="row m-0 p-0">
                <div className="col-6 m-0 px-1">
                  <CustomInput placeHolder={"City"} />
                </div>
                <div className="col-6 m-0 px-1">
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

export default EnquiryForm;
