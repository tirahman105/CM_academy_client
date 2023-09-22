import React, { useContext, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AuthContext } from "../../../providers/AuthProvider";

const Certificate = ({ title, instructor }) => {
  const certificateRef = useRef();
  const { user } = useContext(AuthContext);
  console.log(title, instructor);
  const generateCertificate = async () => {
    const certificateContent = certificateRef.current;
    if (!certificateContent) {
      console.error("Certificate content element not found.");
      return;
    }

    const canvas = await html2canvas(certificateContent, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("l", "mm", "a4"); // Landscape orientation
    const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const verticalCenter = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

    // Embed the company logo directly in the PDF
    const logoImg = new Image();
    logoImg.src = "https://i.ibb.co/B3mCjqQ/image-11.png";

    // Embed the certificate content as an image
    pdf.addImage(imgData, "PNG", 0, verticalCenter, imgWidth, imgHeight);

    // Add the logo on top of the certificate content
    logoImg.onload = function () {
      pdf.addImage(logoImg, "PNG", imgWidth - 165, verticalCenter + 5);

      // Add "Issued on" date as text
      pdf.setFontSize(12);
      pdf.text(
        "Issued on: August 27, 2023",
        imgWidth - 180,
        verticalCenter + imgHeight - 15
      );

      pdf.save("certificate.pdf");
    };
  };

  return (
    <div className="">
      <div
        className="p-8 max-w-lg w-full shadow-md relative rounded-lg"
        ref={certificateRef}
      >
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold mt-4">
            Certificate of Achievement
          </h1>
          <p className="mb-1">This is to certify that</p>
          <h2 className="text-xl font-bold mb-2">{user?.fullName}</h2>
          <p>has successfully completed the course</p>
          <p className="mb-4 font-bold text-lg">{instructor}</p>
          <p>Instructor: {title}</p>
        </div>
      </div>
      <button
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={generateCertificate}
      >
        Generate Certificate
      </button>
    </div>
  );
};

export default Certificate;
