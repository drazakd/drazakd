import React, { useState } from 'react';
import Titre from '../roundDesigns/home/Titre';
import { FiSend } from 'react-icons/fi';

// Composant Contact pour le formulaire de contact
const Contact = () => {
  // Déclaration des états pour stocker les valeurs des champs du formulaire
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  //=============== Gestion des erreurs ==============
  // États pour gérer l'affichage des messages d'erreur
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // État pour afficher un message de succès si le formulaire est correctement envoyé
  const [successMsg, setSuccessMsg] = useState("");

  //=============== Validation d'email ================
  // Fonction pour vérifier la validité du format de l'email
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Gestion des événements de changement pour chaque champ du formulaire
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false); // Réinitialise le message d'erreur
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false); // Réinitialise le message d'erreur
  };
  
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false); // Réinitialise le message d'erreur
  };

  // Fonction de gestion de l'envoi du formulaire
  const handleSend = async (e) => {
    e.preventDefault();
  
    // Réinitialisation des erreurs
    if (!clientName) setErrClientName(true);
    if (!email) setErrEmail(true);
    else if (!EmailValidation(email)) setErrEmail(true);
    if (!messages) setErrMessage(true);
  
    if (clientName && email && EmailValidation(email) && messages) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ clientName, email, messages })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setSuccessMsg(data.success);
          setClientName("");
          setEmail("");
          setMessages("");
        } else {
          // Gérer les erreurs envoyées par le backend
          console.error(data.error);
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
      }
    }
  };
  

  return (
    <div>
      {/* Affiche le titre de la section */}
      <Titre title="Gardons" subTitle="Le Contact" />
      
      {/* Affichage des informations de contact */}
      <div className='p-6 flex justify-between gap-20'>
        <div className='w-1/2'>
          {/* Adresse */}
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Adresse:
            </span>
            Abidjan, Côte d'Ivoire
          </p>
          {/* Téléphone */}
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Téléphone:
            </span>
            +225 0707007560
          </p>
        </div>
        <div className='w-1/2'>
          {/* Email */}
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Email:
            </span>
            drazakd@gmail.com
          </p>
          {/* Disponibilité freelance */}
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Freelance:
            </span>
            Disponible
          </p>
        </div>
      </div>
      
      {/* Section pour le formulaire de contact */}
      <div className='w-full mt-10'>
        <Titre title="Envoyer" subTitle="Un Message" />
        
        <form className='p-6 flex flex-col gap-6'>
          {/* Champs pour le nom et l'email */}
          <div className='w-full flex gap-10 justify-between'>
            {/* Champ de saisie pour le nom du client */}
            <input 
              onChange={handleName}
              value={clientName}
              className={`${errClientName ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
              type='text' 
              placeholder='Nom complet'
            />
            {/* Champ de saisie pour l'email */}
            <input 
              onChange={handleEmail}
              value={email}
              className={`${errEmail ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
              type='email' 
              placeholder='Email'
            />
          </div>
          
          {/* Champ de saisie pour le message */}
          <textarea 
            onChange={handleMessages}
            value={messages}
            className={`${errMessages ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
            cols="30" 
            rows="4"
          ></textarea>
          
          {/* Bouton pour envoyer le message */}
          <button onClick={handleSend} className='text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200'>
            Envoyer Message 
            <span className='mt-1 text-designColor'><FiSend /></span>
          </button>
          
          {/* Affichage du message de succès */}
          {successMsg && <p className='text-green-500'>{successMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact;
