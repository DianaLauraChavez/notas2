
function App() {
  let varprueba = "titulo"

const handleChangePrueba = (event) => {
  varprueba = event.target.evalue;
};

  return (
    <div className="App">
      <h3>notas</h3>
      <label htmlFor="pruebaID">Input de prueba</label>
      <input
         id="pruebaID"
         name="prueba"
         type="text"
         onChange={handleChangePrueba}
         value={varprueba}
      />
    </div>
  );
}

export default App;
