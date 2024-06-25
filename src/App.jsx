import './App.css'
import Card from './components/Card'
import Fixture from './components/Fixture'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'
import KnockoutStage from './components/KnockoutStage'
import TournamentBracket from './components/TournamentBracket'

function App() {

  return (
    <>
      <h1>Copa do Mundo Feminina 2023</h1>

      <section className='knockout_table'>

        <h2>Finais</h2>
        <TournamentBracket fase='finais' />

        <h2>Semifinais</h2>
        <TournamentBracket fase='semifinais' />

        <h2>Quartas de finais</h2>
        <TournamentBracket fase='quartas' />

        <h2>Oitavas de finais</h2>
        <TournamentBracket fase='oitavas' />

      </section>


      {/* <section className='card'>
        <Card />
      </section>

      <h2>Tabela de Jogos</h2>
      <section className='game_table'>
        <GameTable />
      </section>

      <h2>Classificação por grupo</h2>
      <section className='groups_table'>
        <GroupStandings />
      </section>

      <h2>Oitavas de Final</h2>

      <section className='knockout_table'>
        <KnockoutStage fase="oitavas" />
      </section>

      <h2>Jogos do dia 10/08/2023</h2>
      <section className='knockout_table'>
        <Fixture fase='quartas' data='10/08' />
      </section>

      <h2>Quartas de Final</h2>
      <section className='knockout_table'>
        <KnockoutStage fase="quartas" />
      </section>

      <h2>Semifinais</h2>
      <section className='knockout_table'>
        <KnockoutStage fase="semifinais" />
      </section>

      <h2>Finais</h2>
      <section className='knockout_table'>
        <KnockoutStage fase="finais" />
      </section> */}

    </>
  )
}

export default App
