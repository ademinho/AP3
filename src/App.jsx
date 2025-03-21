import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CommandePage from './components/CommandePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img 
                  className="h-8 w-auto" 
                  src="https://via.placeholder.com/150x50/4A90E2/FFFFFF?text=GSB" 
                  alt="GSB Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link to="/" className="text-gsb-dark hover:text-gsb-blue px-3 py-2">Accueil</Link>
                  <Link to="/commande" className="text-gsb-dark hover:text-gsb-blue px-3 py-2">Commande</Link>
                  <Link to="/contact" className="text-gsb-dark hover:text-gsb-blue px-3 py-2">Contact</Link>
                  <button className="bg-gsb-blue text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/commande" element={<CommandePage />} />
          <Route path="/" element={
            <div className="relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Facilitez les échanges entre</span>
                        <span className="block text-gsb-blue">laboratoires et praticiens</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Prenez facilement rendez-vous avec nos représentants GSD pour obtenir des informations plus détaillées
                      </p>
                      <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                        <input
                          type="text"
                          placeholder="Rechercher un lab"
                          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gsb-blue"
                        />
                        <input
                          type="text"
                          placeholder="Rechercher un praticien"
                          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gsb-blue"
                        />
                      </div>
                      <div className="mt-5">
                        <button className="bg-gsb-blue text-white px-8 py-3 rounded-md hover:bg-blue-600 font-medium">
                          RECHERCHER MAINTENANT
                        </button>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Medical professional using phone"
                />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
