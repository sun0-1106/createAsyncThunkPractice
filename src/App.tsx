import './App.css';
import Listpage from './pages/Listpage';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid green;
`;
function App() {
  return (
    <Container>
      <div>원격 데이터 가공 및 이미지 갤러리 구현</div>
      <Listpage />
    </Container>
  );
}

export default App;
