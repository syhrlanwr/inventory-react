import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
import KelolaPegawai from './KelolaPegawai';
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
import KelolaRak from './KelolaRak';
import KelolaSatuan from './KelolaSatuan';
import AddRak from './AddRak';
import AddJenis from './AddJenis';
import EditJenis from './EditJenis';
import KelolaJenis from './KelolaJenis';
import Home from './Home';
import AddPegawai from './addPegawai';
import EditPegawai from './editPegawai';
import KelolaBarang from './KelolaBarang';
import AddBarang from './AddBarang';
import EditBarang from './EditBarang';
import KelolaBarangKeluar from './KelolaBarangKeluar';
import AddBarangKeluar from './AddBarangKeluar';
import EditBarangKeluar from './EditBarangKeluar';
import KelolaPengembalian from './KelolaPengembalian';
import AddPengembalian from './AddPengembalian';
import Laporan from './Laporan';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <AuthProvider>

    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>

        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/users" element={<Layout><KelolaUser /></Layout>} />
        <Route path="/users/add" element={<Layout><AddUser /></Layout>} />
        <Route path="/users/edit/:id" element={<Layout><EditUser /></Layout>} />
        <Route path="/pegawai" element={<Layout><KelolaPegawai /></Layout>} />
        <Route path="/pegawai/add" element={<Layout><AddPegawai /></Layout>} />
        <Route path="/pegawai/edit/:id" element={<Layout><EditPegawai /></Layout>} />
        <Route path="/rak" element={<Layout><KelolaRak /></Layout>} />
        <Route path="/rak/add" element={<Layout><AddRak /></Layout>} />
        <Route path="/rak/edit/:id" element={<Layout><EditRak /></Layout>} />
        <Route path="/satuan" element={<Layout><KelolaSatuan /></Layout>} />
        <Route path="/satuan/add" element={<Layout><AddSatuan /></Layout>} />
        <Route path="/satuan/edit/:id" element={<Layout><EditSatuan /></Layout>} />
        <Route path="/jenis" element={<Layout><KelolaJenis /></Layout>} />
        <Route path="/jenis/add" element={<Layout><AddJenis /></Layout>} />
        <Route path="/jenis/edit/:id" element={<Layout><EditJenis /></Layout>} />
        <Route path="/barang" element={<Layout><KelolaBarang /></Layout>} />
        <Route path="/barang/add" element={<Layout><AddBarang /></Layout>} />
        <Route path="/barang/edit/:id" element={<Layout><EditBarang /></Layout>} />
        <Route path="/barangkeluar" element={<Layout><KelolaBarangKeluar /></Layout>} />
        <Route path="/barangkeluar/add" element={<Layout><AddBarangKeluar /></Layout>} />
        <Route path="/barangkeluar/edit/:id" element={<Layout><EditBarangKeluar /></Layout>} />
        <Route path="/pengembalian" element={<Layout><KelolaPengembalian /></Layout>} />
        <Route path="/pengembalian/add" element={<Layout><AddPengembalian /></Layout>} />
        <Route path="/laporan" element={<Layout><Laporan /></Layout>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
