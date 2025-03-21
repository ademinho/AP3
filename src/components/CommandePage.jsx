import { useState } from 'react'
import doctor1 from "../../public/images/doctors/doctor1.jpg"
import doctor2 from "../../public/images/doctors/doctor2.jpg"
import doctor3 from "../../public/images/doctors/doctor3.jpg"

const praticiens = [
  {
    id: 1,
    nom: "Martin",
    prenom: "Jean-Pierre",
    specialite: "Médecin Généraliste",
    image: doctor1,
    medicaments: [
      { id: 1, nom: "Doliprane", prix: 5.99, description: "Paracétamol 500mg, 16 comprimés" },
      { id: 2, nom: "Aspirine", prix: 4.50, description: "Acide acétylsalicylique 500mg, 20 comprimés" },
      { id: 3, nom: "Paracétamol", prix: 3.75, description: "Paracétamol 500mg, 12 comprimés" },
      { id: 4, nom: "Lisopaine", prix: 6.99, description: "Sirop contre la toux, 100ml" }
    ]
  },
  {
    id: 2,
    nom: "Dubois",
    prenom: "Marie",
    specialite: "Médecin Généraliste",
    image: doctor2,
    medicaments: [
      { id: 5, nom: "Doliprane", prix: 5.99, description: "Paracétamol 500mg, 16 comprimés" },
      { id: 6, nom: "Aspirine", prix: 4.50, description: "Acide acétylsalicylique 500mg, 20 comprimés" },
      { id: 7, nom: "Paracétamol", prix: 3.75, description: "Paracétamol 500mg, 12 comprimés" },
      { id: 8, nom: "Lisopaine", prix: 6.99, description: "Sirop contre la toux, 100ml" }
    ]
  },
  {
    id: 3,
    nom: "Bernard",
    prenom: "Sophie",
    specialite: "Médecin Généraliste",
    image: doctor3,
    medicaments: [
      { id: 9, nom: "Doliprane", prix: 5.99, description: "Paracétamol 500mg, 16 comprimés" },
      { id: 10, nom: "Aspirine", prix: 4.50, description: "Acide acétylsalicylique 500mg, 20 comprimés" },
      { id: 11, nom: "Paracétamol", prix: 3.75, description: "Paracétamol 500mg, 12 comprimés" },
      { id: 12, nom: "Lisopaine", prix: 6.99, description: "Sirop contre la toux, 100ml" }
    ]
  }
]

function CommandePage() {
  const [praticienSelectionne, setPraticienSelectionne] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Contenu principal */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gsb-blue to-blue-600">
              Commander des médicaments
            </h1>
            <p className="text-xl text-gsb-blue max-w-2xl mx-auto">
              Sélectionnez un praticien pour voir les médicaments disponibles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {praticiens.map((praticien) => (
              <div 
                key={praticien.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                  praticienSelectionne === praticien.id 
                    ? 'ring-2 ring-gsb-blue scale-105' 
                    : 'hover:scale-105 hover:shadow-2xl'
                }`}
                onClick={() => setPraticienSelectionne(praticien.id === praticienSelectionne ? null : praticien.id)}
              >
                <div className="relative h-72">
                  <img 
                    src={praticien.image} 
                    alt={`${praticien.prenom} ${praticien.nom}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-black text-2xl font-bold">
                            Dr. {praticien.prenom} {praticien.nom}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  {praticienSelectionne === praticien.id && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 border-b pb-4">Médicaments disponibles</h3>
                      {praticien.medicaments.map((medicament) => (
                        <div key={medicament.id} className="group">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-gsb-blue transition-colors">
                                {medicament.nom}
                              </h4>
                              <p className="text-sm text-gray-500">{medicament.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gsb-blue">{medicament.prix}€</p>
                              <button 
                                className="mt-2 bg-gsb-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Ajouter la logique du panier ici
                                }}
                              >
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandePage 