// import React from 'react';

// const ProfileHeader = ({ coverPhoto, profilePhoto, onUploadCover, onViewClient }) => {
//   return (
//     <div className="relative">
//       <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${coverPhoto})` }}>
//         <button className="absolute top-2 right-2 bg-white py-1 px-3 border rounded-md shadow-md" onClick={onUploadCover}>
//           Upload Cover Photo
//         </button>
//       </div>
//       <div className="flex items-center p-4 bg-white shadow-md relative -mt-12">
//         <div className="relative">
//           <img src={profilePhoto} alt="Profile" className="h-20 w-20 rounded-full border-2 border-white -mt-10" />
//           <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
//             <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.5 2.5 0 11-3.536-3.536l-8.036 8.036A4.992 4.992 0 005 16.001V20h3.999a4.992 4.992 0 004.293-2.232l8.036-8.036z"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="ml-4">
//           <h2 className="text-xl font-semibold">General</h2>
//           <button className="text-blue-600 flex items-center">
//             <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"></path>
//             </svg>
//             Add profile
//           </button>
//         </div>
//         <button className="ml-auto bg-white py-1 px-3 border rounded-md shadow-md" onClick={onViewClient}>
//           View Client Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;
