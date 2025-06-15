import { FaUsers, FaUserMd, FaFileMedical } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaUsers size={28} />,
      value: "10k+",
      label: "Active Users",
    },
    {
      icon: <FaUserMd size={28} />,
      value: "30K+",
      label: "Doctors using actively",
    },
    {
      icon: <FaFileMedical size={28} />,
      value: "20k+",
      label: "Reports analysed",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto shadow-xl rounded-2xl bg-white grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-emerald-900 text-white rounded-full p-4 mb-4">
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// const team = [
//   { name: "Vansh Sharma", role: "Founder & CEO" },
//   { name: "Arpit Jain", role: "Founder & CEO" },
//   { name: "Arpit Jindal", role: "Founder & CEO" },
// ];

// export default function Team() {
//   // return (
//   //   <section className="bg-gray-50 py-20">
//   //     <div className="container mx-auto px-6 text-center">
//   //       <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
//   //       <div className="grid gap-12 md:grid-cols-3">
//   //         {team.map((t) => (
//   //           <div key={t.name} className="bg-white rounded-lg shadow-lg p-6">
//   //             {/* <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div> */}
//   //             <h3 className="text-xl font-semibold">{t.name}</h3>
//   //             <p className="text-gray-600">{t.role}</p>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
// }
