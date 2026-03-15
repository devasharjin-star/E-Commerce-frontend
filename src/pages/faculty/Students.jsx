const Students = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Students</h1>

      <table className="w-full bg-white rounded shadow">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Reg No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-3">9501</td>
            <td>Arun</td>
            <td>arun@gmail.com</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
};

export default Students;