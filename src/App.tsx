import { Route, Routes } from "react-router";
import PatientRegistration from "./Registration/PatientRegistration";
import Registration from "./Registration/Registration";
import DoctorRegistration from "./Registration/DoctorRegistration";
import StudentRegistration from "./Registration/StudentRegistration";
import ReceptionistRegistration from "./Registration/ReceptionistRegistration";
import HomePage from "./HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />}>
          <Route index element={<PatientRegistration />} />
          <Route
            path="patient-registration"
            element={<PatientRegistration />}
          />
          <Route
            path="doctor-registration"
            index
            element={<DoctorRegistration />}
          />
          <Route
            path="student-registration"
            index
            element={<StudentRegistration />}
          />
          <Route
            path="receptionist-registration"
            index
            element={<ReceptionistRegistration />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
