const Jobtable = () => {
  return (
    <div className="m-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Current Openings
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Experience
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                MERN Developer
              </th>
              <td className="px-6 py-4">Engineering</td>
              <td className="px-6 py-4">Remote/Bengaluru</td>
              <td className="px-6 py-4">2+</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                UI Designer
              </th>
              <td className="px-6 py-4">Designing</td>
              <td className="px-6 py-4">Remote</td>
              <td className="px-6 py-4">5+</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Talent Recruiter
              </th>
              <td className="px-6 py-4">Human Resource</td>
              <td className="px-6 py-4">Onsite</td>
              <td className="px-6 py-4">6+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobtable;
