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
import Layout from './layouts/Layout';
import Login from './Login';
import KelolaPegawai from './kelolaPegawai';
import KelolaRak from './KelolaRak';
import KelolaSatuan from './kelolaSatuan';
import AddRak from './AddRak';
import Home from './Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Layout><KelolaUser /></Layout>} />
        <Route path="/pegawai" element={<Layout><KelolaPegawai /></Layout>} />
        <Route path="/rak" element={<Layout><KelolaRak /></Layout>} />
        <Route path="/rak/add" element={<Layout><AddRak /></Layout>} />
        <Route path="/satuan" element={<Layout><KelolaSatuan /></Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
