import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'
import { NotesContextProvider } from './context/notes.context.jsx'

createRoot(document.getElementById('root')).render(
    <NotesContextProvider>
        <App />
    </NotesContextProvider>
)
