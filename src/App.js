import "./App.css";
import Testimonio from "./Components/Testimonio";
import Person from "../src/Data/testimonios.json";

function App() {
	return (
		<div className="App">
			<h1>Esto es lo que dicen nuestros alumnos:</h1>
			<Testimonio
				nombre={Person["testimony-01"].name}
				pais={Person["testimony-01"].country}
				imagen={Person["testimony-01"].image}
				cargo={Person["testimony-01"].job}
				empresa={Person["testimony-01"].company}
				testimonio={Person["testimony-01"].comment}
			/>
			<Testimonio
				nombre={Person["testimony-02"].name}
				pais={Person["testimony-02"].country}
				imagen={Person["testimony-02"].image}
				cargo={Person["testimony-02"].job}
				empresa={Person["testimony-02"].company}
				testimonio={Person["testimony-02"].comment}
			/>
			<Testimonio
				nombre={Person["testimony-03"].name}
				pais={Person["testimony-03"].country}
				imagen={Person["testimony-03"].image}
				cargo={Person["testimony-03"].job}
				empresa={Person["testimony-03"].company}
				testimonio={Person["testimony-03"].comment}
			/>
		</div>
	);
}

export default App;
