import styles from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
          loading={loading}
        />

        {loading && <Spinner />}
        {hasWeatherData &&
          <WeatherDetail
            key={weather.name}
            weather={weather}
          />
        }
        {notFound &&
        <div className={styles.alertWrapper}>
          <Alert>Ciudad No Encontrada</Alert>
        </div>
        }
      </div>
    </>
  )
}

export default App
