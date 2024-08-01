import useCard from "../hooks/useCard";
import imagenDado from "../images/icon-dice.svg";
import separador from "../images/pattern-divider-desktop.svg";
import "../components/card.css";
export default function Card() {
  const { data, loading, fetchData } = useCard();

  const handleClick = () => {
    fetchData();
  };

  const advice = data ? data.advice : "Click the button for advice";
  const id = data ? data.id : "n";

  return (
    <div>
      <main className="card">
        {loading ? (
          <p className="card_loading">Cargando...</p>
        ) : (
          <>
            {" "}
            <h1 className="card_h1">{`A D V I C E # ${id}`}</h1>
            <h3 className="card_h3">"{advice}"</h3>
          </>
        )}
        <img src={separador} alt="Separador" />
        <button onClick={handleClick} className="card_button">
          <img src={imagenDado} alt="Dado" />
        </button>
      </main>
    </div>
  );
}
