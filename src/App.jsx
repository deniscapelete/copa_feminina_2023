import { useState } from 'react'
import './App.css'
// import Card from './components/Card'
// import Fixture from './components/Fixture'
// import GameTable from './components/GameTable'
// import GroupStandings from './components/GroupStandings'
// import KnockoutStage from './components/KnockoutStage'
import TournamentBracket from './components/TournamentBracket'

function App() {

  const [activeTab, setActiveTab] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabcontent() {
    switch (activeTab) {

      case 'Tab 1':
        return <TournamentBracket fase='oitavas' />

      case 'Tab 2':
        return <TournamentBracket fase='quartas' />

      case 'Tab 3':
        return <TournamentBracket fase='semifinais' />

    }
  }

  return (

    <>
      <h1>Copa do Mundo Feminina 2023</h1>

      <section className='knockout_table'>

        <div className='tabs'>

          <button
            className={activeTab === 'Tab 1' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 1')}
          >
            Oitavas
          </button>

          <button
            className={activeTab === 'Tab 2' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 2')}
          >
            Quartas
          </button>

          <button
            className={activeTab === 'Tab 3' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 3')}
          >
            Semifinais
          </button>

        </div>

        <div className='tab_content'>
          {renderTabcontent()}
        </div>

      </section>


      {/* <h2>Finais</h2>
        <TournamentBracket fase='finais' />

        <h2>Semifinais</h2>
        <TournamentBracket fase='semifinais' />

        <h2>Quartas de finais</h2>
        <TournamentBracket fase='quartas' />

        <h2>Oitavas de finais</h2>
        <TournamentBracket fase='oitavas' /> */}



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
