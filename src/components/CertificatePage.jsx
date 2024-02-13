import React from "react";

const CertificatePage = () => {
  return (
    <div className="certificate-section">
      <h1 className="certification-heading">Our Certificates</h1>
      <div className="certificate">
        <object
          data={process.env.PUBLIC_URL + "/Certificate1.pdf"}
          width="30%"
          height="250px"
          type="application/pdf"
        ></object>
        <div className="certificate-info">Certificate 1 (IAS)</div>
      </div>
      <div className="certificate">
        <object
          data={process.env.PUBLIC_URL + "/Certificate2.pdf"}
          width="30%"
          height="250px"
          type="application/pdf"
        ></object>
        <div className="certificate-info">Certificate 2 (FSC)</div>
      </div>
      <div className="certificate">
        <object
          data={process.env.PUBLIC_URL + "/Certificate3.pdf"}
          width="30%"
          height="250px"
          type="application/pdf"
        ></object>
        <div className="certificate-info">Certificate 3 (fssai)</div>
      </div>
      <div className="certificate">
        <object
          data={process.env.PUBLIC_URL + "/Certificate4.pdf"}
          width="30%"
          height="250px"
          type="application/pdf"
        ></object>
        <div className="certificate-info">Certificate 4 (Organic)</div>
      </div>
    </div>
  );
};
export default CertificatePage;
