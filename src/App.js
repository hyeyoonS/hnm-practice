import './App.css';
import { Routes, Route} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인페이지, 상품상세페이지(1개로재활용)
//1-1. 공통 네비게이션바 만들기
//2. 전체상품페이지=>전체상품을 볼 수 있다
//3. 로그인페이지=> 로그인버튼을 누를 경우 로그인페이지로 이동
//4. 상품디테일 눌렀으나, 로그인 안 되어있을 경우 => 로그인페이지로 이동
//5. 로그인 되어있을 경우=> 상품상세페이지를 볼 수 있다
//6. 로그아웃 버튼 클릭 => 로그아웃이 된다
//7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없고, 로그인 페이지로 이동
//8. 로그인=> 로그아웃버튼 노출, 로그아웃=> 로그인버튼 노출
//9. 상품 검색하기(filter)

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
