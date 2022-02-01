import './App.css';
import Profile from './profile/Profile';
import Photo from '../src/Photo.jpg'; 
function App() {
  const handleName =(fullName) => alert(fullName);
  const styleProfile={
    margin:20,
    padding:20,
    fontFamily:"helvetica",
    textAlign:"center",
    border:"5px solid rgba(0,76,63)",
    backgroundColor:"rgba(0,152,127,0.1)",
    borderRadius:25,
  };
  const styleImg= {width:500};
  return (
    <div style={styleProfile}>
      <Profile fullName="This is firas" 
      profession="student" 
      handleName={handleName} 
      >
        <img src={Photo} alt="junior" style={styleImg} />

      </Profile>
    </div>
  );
}

export default App;
