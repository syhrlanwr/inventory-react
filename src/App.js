import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import AddPegawai from './addPegawai';
// import EditPegawai from './editPegawai';
// import KelolaPegawai from './kelolaPegawai';
// import AddRak from './addRak';
import EditRak from './EditRak';
// import KelolaRak from './kelolaRak';
import AddSatuan from './AddSatuan';
import EditSatuan from './EditSatuan';
import KelolaUser from './KelolaUser';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Layout from './layouts/Layout';
import Login from './Login';
import KelolaPegawai from './KelolaPegawai';
import KelolaRak from './KelolaRak';
import KelolaSatuan from './KelolaSatuan';
import AddRak from './AddRak';
import Home from './Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Layout><KelolaUser /></Layout>} />
        <Route path="/users/add" element={<Layout><AddUser /></Layout>} />
        <Route path="/users/edit/:id" element={<Layout><EditUser /></Layout>} />
        <Route path="/users/delete/:id" element={<Layout><KelolaUser /></Layout>} />
        <Route path="/pegawai" element={<Layout><KelolaPegawai /></Layout>} />
        <Route path="/rak" element={<Layout><KelolaRak /></Layout>} />
        <Route path="/rak/add" element={<Layout><AddRak /></Layout>} />
        <Route path="/rak/edit/:id" element={<Layout><EditRak /></Layout>} />
        <Route path="/rak/delete/:id" element={<Layout><KelolaRak /></Layout>} />
        <Route path="/satuan" element={<Layout><KelolaSatuan /></Layout>} />
        <Route path="/satuan/add" element={<Layout><AddSatuan /></Layout>} />
        <Route path="/satuan/edit/:id" element={<Layout><EditSatuan /></Layout>} />
        <Route path="/satuan/delete/:id" element={<Layout><KelolaSatuan /></Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
