import { useState } from 'react';
import './App.css';
import Layout from './layouts/Layout';
import ProfileFormBad from './01-derived-state/profileForm/bad-example/App';
import ProfileFormSolution from './01-derived-state/profileForm/solution/App';

function App() {
  const [selectedMenu, setSelectedMenu] = useState<string>('profile-bad');

  return (
    <Layout
      selectedMenu={selectedMenu}
      onMenuItemSelect={setSelectedMenu}
    >
      <div className="content">
        {selectedMenu === 'profile-bad' && <ProfileFormBad />}
        {selectedMenu === 'profile-solution' && <ProfileFormSolution />}
        {selectedMenu === 'form-exercise' && <div>Form — exercise (Coming soon)</div>}
        {selectedMenu === 'leaderboard-bad' && <div>Leaderboard — bad example (Coming soon)</div>}
        {selectedMenu === 'leaderboard-solution' && <div>Leaderboard — solution (Coming soon)</div>}
      </div>
    </Layout>
  )
}

export default App
