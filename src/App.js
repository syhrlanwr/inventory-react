import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
import AddPegawai from './AddPegawai';
import EditPegawai from './EditPegawai';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users"
          element={
            <Layout>
              <KelolaUser />
            </Layout>
          }
        />
        <Route
          path="/users/add"
          element={
            <Layout>
              <AddUser />
            </Layout>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <Layout>
              <EditUser />
            </Layout>
          }
        />
        <Route
          path="/users/delete/:id"
          element={
            <Layout>
              <KelolaUser />
            </Layout>
          }
        />
        <Route
          path="/pegawai"
          element={
            <Layout>
              <KelolaPegawai />
            </Layout>
          }
        />
        <Route
          path="/rak"
          element={
            <Layout>
              <KelolaRak />
            </Layout>
          }
        />
        <Route
          path="/rak/add"
          element={
            <Layout>
              <AddRak />
            </Layout>
          }
        />
        <Route
          path="/rak/edit/:id"
          element={
            <Layout>
              <EditRak />
            </Layout>
          }
        />
        <Route
          path="/rak/delete/:id"
          element={
            <Layout>
              <KelolaRak />
            </Layout>
          }
        />
        <Route
          path="/satuan"
          element={
            <Layout>
              <KelolaSatuan />
            </Layout>
          }
        />
        <Route
          path="/satuan/add"
          element={
            <Layout>
              <AddSatuan />
            </Layout>
          }
        />
        <Route
          path="/satuan/edit/:id"
          element={
            <Layout>
              <EditSatuan />
            </Layout>
          }
        />
        <Route
          path="/satuan/delete/:id"
          element={
            <Layout>
              <KelolaSatuan />
            </Layout>
          }
        />
        <Route
          path="/jenis"
          element={
            <Layout>
              <KelolaJenis />
            </Layout>
          }
        />
        <Route
          path="/jenis/add"
          element={
            <Layout>
              <AddJenis />
            </Layout>
          }
        />
        <Route
          path="/jenis/edit/:id"
          element={
            <Layout>
              <EditJenis />
            </Layout>
          }
        />
        <Route
          path="/jenis/delete/:id"
          element={
            <Layout>
              <KelolaJenis />
            </Layout>
          }
        />
        <Route
          path="/pegawai"
          element={
            <Layout>
              <KelolaPegawai />
            </Layout>
          }
        />
        <Route
          path="/pegawai/add"
          element={
            <Layout>
              <AddPegawai />
            </Layout>
          }
        />
        <Route
          path="/pegawai/edit/:id"
          element={
            <Layout>
              <EditPegawai />
            </Layout>
          }
        />
        <Route
          path="/pegawai/delete/:id"
          element={
            <Layout>
              <KelolaPegawai />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
