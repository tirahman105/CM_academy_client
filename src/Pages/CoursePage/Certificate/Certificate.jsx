// import React, { useContext, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { AuthContext } from '../../../providers/AuthProvider';

// const Certificate = ({ onClose }) => {
//   const certificateRef = useRef();
//   const { user } = useContext(AuthContext);

//   const generateCertificate = async () => {
//     const certificateContent = certificateRef.current;
//     if (!certificateContent) {
//       console.error("Certificate content element not found.");
//       return;
//     }

//     const canvas = await html2canvas(certificateContent, { scale: 2 }); // Higher scale for better quality
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
//     const imgWidth = 297; // A4 width in mm
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     pdf.save('certificate.pdf');
//   };

//   return (
//     <div className=" h-screen bg-gray-100">
//       <div
//         className="p-8 max-w-lg w-full shadow-md relative"
//         style={{
//           border: '4px solid #000',
//           backgroundImage: "url('/path-to-pattern.png')", // Replace with your pattern image URL
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//         }}
//         ref={certificateRef}
//       >
//         <div className="mb-4 text-center">
//           <img
//             src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
//             alt="Company Logo"
//             className="mx-auto mb-2"
//             style={{ width: '80px', height: '80px' }}
//           />
//           <h1 className="text-2xl font-bold">Certificate of Achievement</h1>
//           <p className="mb-1">This is to certify that</p>
//           <h2 className="text-xl font-bold mb-2">{user.displayName}</h2>
//           <p>has successfully completed the course</p>
//           <p className="mb-4 font-bold text-lg">Web Development</p>
//           <p>Instructor: Tareq Ibna Rahman</p>
//           <p>Issued on: August 27, 2023</p>
//         </div>
//       </div>
//   <div className='justify-center items-center'>
// <div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         onClick={generateCertificate}
//       >
//         Download Certificate
//       </button>
//       <button
//           className="bg-red-400 ms-4 hover:bg-blue-600 text-white py-2 px-4 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
// </div>
//   </div>
//     </div>
//   );
// };

// export default Certificate;

// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = () => {
//   const certificateRef = useRef();

//   const generateCertificate = async () => {
//     const certificateContent = certificateRef.current;
//     if (!certificateContent) {
//       console.error("Certificate content element not found.");
//       return;
//     }

//     const canvas = await html2canvas(certificateContent, { scale: 2 }); // Higher scale for better quality
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
//     const imgWidth = 297; // A4 width in mm
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     pdf.save('certificate.pdf');
//   };

//   return (
//     <div className=" bg-gray-100">
//       <div
//         className="p-8 max-w-lg w-full shadow-md relative"
//         style={{
//           border: '4px solid #000',
//           backgroundImage: "url('/path-to-pattern.png')", // Replace with your pattern image URL
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//         }}
//         ref={certificateRef}
//       >
//         <div className="mb-4 text-center">
//           <img
//             src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
//             alt="Company Logo"
//             className="mx-auto mb-2"
//             style={{ width: '80px', height: '80px' }}
//           />
//           <h1 className="text-2xl font-bold">Certificate of Achievement</h1>
//           <p className="mb-1">This is to certify that</p>
//           <h2 className="text-xl font-bold mb-2">John Doe</h2>
//           <p>has successfully completed the course</p>
//           <p className="mb-4 font-bold text-lg">Web Development</p>
//           <p>Instructor: Tareq Ibna Rahman</p>
//           <p>Issued on: August 27, 2023</p>
//         </div>
//       </div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         onClick={generateCertificate}
//       >
//         Generate Certificate
//       </button>
//     </div>
//   );
// };

// export default Certificate;



// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = () => {
//     const certificateRef = useRef();
  
//     const generateCertificate = async () => {
//       const certificateContent = certificateRef.current;
//       if (!certificateContent) {
//         console.error("Certificate content element not found.");
//         return;
//       }
  
//       const canvas = await html2canvas(certificateContent, { scale: 2 });
//       const imgData = canvas.toDataURL('image/png');
  
//       const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
//       const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
//     //   // Add "Issued on" date as text
//     //   pdf.setFontSize(12);
//     //   pdf.text('Issued on: August 27, 2023', imgWidth - 100, imgHeight - 15);
  
//       pdf.save('certificate.pdf');
//     };
  

//   return (
//     <div className=" bg-gray-100">
//       <div
//         className="p-8 max-w-lg w-full shadow-md relative"
//         style={{
//           border: '4px solid #000',
//           backgroundImage: "url('/path-to-pattern.png')", // Replace with your pattern image URL
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//         }}
//         ref={certificateRef}
//       >
//         <div className="mb-4 text-center">
//           <img
//             src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
//             alt="Company Logo"
//             className="mx-auto mb-2"
//             style={{ width: '80px', height: '80px' }}
//           />
//           <h1 className="text-2xl font-bold">Certificate of Achievement</h1>
//           <p className="mb-1">This is to certify that</p>
//           <h2 className="text-xl font-bold mb-2">John Doe</h2>
//           <p>has successfully completed the course</p>
//           <p className="mb-4 font-bold text-lg">Web Development</p>
//           <p>Instructor: Tareq Ibna Rahman</p>
//           <p>Issued on: August 27, 2023</p>
//         </div>
//       </div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         onClick={generateCertificate}
//       >
//         Generate Certificate
//       </button>
//     </div>
//   );
// };

// export default Certificate;

// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = () => {
//     const certificateRef = useRef();
  
//     const generateCertificate = async () => {
//       const certificateContent = certificateRef.current;
//       if (!certificateContent) {
//         console.error("Certificate content element not found.");
//         return;
//       }
  
//       const canvas = await html2canvas(certificateContent, { scale: 2 });
//       const imgData = canvas.toDataURL('image/png');
  
//       const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
//       const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
//       // Calculate vertical center position
//       const verticalCenter = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;
  
//       // Embed the company logo directly in the PDF
//       const logoImg = new Image();
//       logoImg.src = 'https://i.ibb.co/B3mCjqQ/image-11.png'; // Replace with your logo image URL
//       pdf.addImage(logoImg, 'PNG', 50, verticalCenter - 40, 80, 80);
  
//       // Embed the certificate content as an image
//       pdf.addImage(imgData, 'PNG', 0, verticalCenter, imgWidth, imgHeight);
  
//       // Add "Issued on" date as text
//       pdf.setFontSize(12);
//       pdf.text('Issued on: August 27, 2023', imgWidth - 180, verticalCenter + imgHeight - 15);
  
//       pdf.save('certificate.pdf');
//     };
  

//   return (
//     <div className=" bg-gray-100">
//       <div
//         className="p-8 max-w-lg w-full shadow-md relative bg-white rounded-lg"
//         style={{
//           border: '4px solid #000',
//           backgroundImage: "url('/path-to-pattern.png')", // Replace with your pattern image URL
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           padding: '20px', // Add padding to all sides
//         }}
//         ref={certificateRef}
//       >
//         <div className="mb-4 text-center">
//           <img
//             src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
//             alt="Company Logo"
//             className="mx-auto mb-2"
//             style={{ width: '80px', height: '80px' }}
//           />
//           <h1 className="text-2xl font-bold">Certificate of Achievement</h1>
//           <p className="mb-1">This is to certify that</p>
//           <h2 className="text-xl font-bold mb-2">John Doe</h2>
//           <p>has successfully completed the course</p>
//           <p className="mb-4 font-bold text-lg">Web Development</p>
//           <p>Instructor: Tareq Ibna Rahman</p>
//           {/* "Issued on" date will be added to PDF */}
//         </div>
//       </div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         onClick={generateCertificate}
//       >
//         Generate Certificate
//       </button>
//     </div>
//   );
// };

// export default Certificate;





// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Certificate = () => {
//   const certificateRef = useRef();

//   const generateCertificate = async () => {
//     const certificateContent = certificateRef.current;
//     if (!certificateContent) {
//       console.error("Certificate content element not found.");
//       return;
//     }

//     const canvas = await html2canvas(certificateContent, { scale: 2 });
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
//     const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     const verticalCenter = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

//     // Embed the company logo directly in the PDF
//     const logoImg = new Image();
//     logoImg.src = 'https://i.ibb.co/B3mCjqQ/image-11.png';
    
//     logoImg.onload = function () {
//       pdf.addImage(logoImg, 'PNG', 50, verticalCenter - 40, 80, 80);

//       // Embed the certificate content as an image
//       pdf.addImage(imgData, 'PNG', 0, verticalCenter, imgWidth, imgHeight);

//       // Add "Issued on" date as text
//       pdf.setFontSize(12);
//       pdf.text('Issued on: August 27, 2023', imgWidth - 180, verticalCenter + imgHeight - 15);

//       pdf.save('certificate.pdf');
//     };
//   };

//   return (
//     <div className="">
//       <div
//         className="p-8 max-w-lg w-full shadow-md relative rounded-lg"
//         style={{
//           border: '4px solid #000',
//           backgroundImage: "url('https://t3.ftcdn.net/jpg/02/31/17/56/360_F_231175652_xHTMFeyiHw4a0A6y0BaDoVZNyHqXB19z.jpg')", // Replace with your pattern image URL
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           padding: '20px', // Add padding to all sides
//         }}
//         ref={certificateRef}
//       >
//         <div className="mb-4 text-center">
//           {/* <img
//             src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
//             alt="Company Logo"
//             className="mx-auto mb-2"
//             style={{ width: '80px', height: '80px' }}
//           /> */}

//           <div className='m-3' ><span className='bg-blue-600 h-4 w-4 text-white text-2xl p-4 rounded-full'>CM </span></div>
//           <h1 className="text-2xl font-bold mt-4">Certificate of Achievement</h1>
//           <p className="mb-1">This is to certify that</p>
//           <h2 className="text-xl font-bold mb-2">John Doe</h2>
//           <p>has successfully completed the course</p>
//           <p className="mb-4 font-bold text-lg">Web Development</p>
//           <p>Instructor: Tareq Ibna Rahman</p>
//         </div>
//       </div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         onClick={generateCertificate}
//       >
//         Generate Certificate
//       </button>
//     </div>
//   );
// };

// export default Certificate;




import React, { useContext, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AuthContext } from '../../../providers/AuthProvider';

const Certificate = () => {
  const certificateRef = useRef();
  const { user } = useContext(AuthContext);

  const generateCertificate = async () => {
    const certificateContent = certificateRef.current;
    if (!certificateContent) {
      console.error("Certificate content element not found.");
      return;
    }

    const canvas = await html2canvas(certificateContent, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
    const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const verticalCenter = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;

    // Embed the company logo directly in the PDF
    const logoImg = new Image();
    logoImg.src = 'https://i.ibb.co/B3mCjqQ/image-11.png';

    // Embed the certificate content as an image
    pdf.addImage(imgData, 'PNG', 0, verticalCenter, imgWidth, imgHeight);

    // Add the logo on top of the certificate content
    logoImg.onload = function () {
      pdf.addImage(logoImg, 'PNG', imgWidth - 165, verticalCenter + 5 );

      // Add "Issued on" date as text
      pdf.setFontSize(12);
      pdf.text('Issued on: August 27, 2023', imgWidth - 180, verticalCenter + imgHeight - 15);

      pdf.save('certificate.pdf');
    };
  };

  return (
    <div className="">
      <div
        className="p-8 max-w-lg w-full shadow-md relative rounded-lg"
        // style={{
        // //   border: '4px solid #000',
        //   backgroundImage: "url('https://t3.ftcdn.net/jpg/02/31/17/56/360_F_231175652_xHTMFeyiHw4a0A6y0BaDoVZNyHqXB19z.jpg')",
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   padding: '20px', // Add padding to all sides
        // }}
        ref={certificateRef}
      >
        <div className="mb-4 text-center">
              {/* <img
            src="https://i.ibb.co/B3mCjqQ/image-11.png" // Replace with your logo image URL
            alt="Company Logo"
            className="mx-auto mb-2"
            style={{ width: '80px', height: '80px' }}
           />  */}
          <h1 className="text-2xl font-bold mt-4">Certificate of Achievement</h1>
          <p className="mb-1">This is to certify that</p>
          <h2 className="text-xl font-bold mb-2">{user?.fullName}</h2>
          <p>has successfully completed the course</p>
          <p className="mb-4 font-bold text-lg">Web Development</p>
          <p>Instructor: Tareq Ibna Rahman</p>
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






