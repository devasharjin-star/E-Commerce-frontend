const Dashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Faculty Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Classes Today</h3>
          <p className="text-2xl font-bold">4</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Pending Assignments</h3>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Students</h3>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Attendance</h3>
          <p className="text-2xl font-bold">92%</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;