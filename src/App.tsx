import './App.css'
import useLocalStorage from './custom-hooks/useLocalStorage'

function App() {
	const [token, { setItem, removeItem }] = useLocalStorage('token')

	return (
		<div>
			<p>Твой токен: {token}</p>
			<div>
				<button onClick={() => setItem('new-token')}>Задать токен</button>
				<button onClick={() => removeItem()}>Удалить токен</button>
			</div>
		</div>
	)
}

export default App
