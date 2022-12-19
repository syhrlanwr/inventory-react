import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import AddPegawai from './addPegawai';
// import EditPegawai from './editPegawai';
// import KelolaPegawai from './kelolaPegawai';
// import AddRak from './addRak';
// import EditRak from './editRak';
// import KelolaRak from './kelolaRak';
// import AddSatuan from './addSatuan';
// import EditSatuan from './editSatuan';
// import KelolaSatuan from './kelolaSatuan';
import KelolaUser from './kelolaUser';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KelolaUser />} />
      </Routes>
    </Router>
  );
}

export default App;
