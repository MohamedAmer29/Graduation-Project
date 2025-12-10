import { Route, Routes } from "react-router";
import HomePage from "./routers/Home Page/HomePage";
import Registration from "./routers/Registration/Registration";
import PatientRegistration from "./components/Registration/PatientRegistration";
import DoctorRegistration from "./components/Registration/DoctorRegistration";
import StudentRegistration from "./components/Registration/StudentRegistration";
import ReceptionistRegistration from "./components/Registration/ReceptionistRegistration";
import BrowseDoctors from "./components/HomePage/BrowseDoctors";

const App = () => {
  const isRegister = true;
  return (
    <div className={!isRegister ? "w-11/12" : "w-[95%] m-auto"}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/browse-doctors" element={<BrowseDoctors />} />
        </Route>
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
