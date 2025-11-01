// src/components/contact/Contact.jsx - Version responsive
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
    <div className='px-2 md:px-0'>
      {/* Affiche le titre de la section */}
      <Titre title="Gardons" subTitle="Le Contact" />
      
      {/* Affichage des informations de contact */}
      <div className='p-4 md:p-6 flex flex-col md:flex-row justify-between gap-6 md:gap-10 lg:gap-20'>
        <div className='w-full md:w-1/2'>
          {/* Adresse */}
          <p className='flex flex-col sm:flex-row sm:justify-between w-full text-base md:text-lg text-[#ccc] py-3 md:py-4 border-b-[1px] border-b-zinc-800 gap-2 sm:gap-0'>
            <span className='bg-designColor text-gray-700 text-xs md:text-sm font-titleFont font-medium px-2 py-1 md:px-2 rounded-md flex items-center justify-center w-fit sm:w-auto'>
              Adresse:
            </span>
            <span className='text-sm md:text-base text-right sm:text-left'>Abidjan, Côte d'Ivoire</span>
          </p>
          {/* Téléphone */}
          <p className='flex flex-col sm:flex-row sm:justify-between w-full text-base md:text-lg text-[#ccc] py-3 md:py-4 border-b-[1px] border-b-zinc-800 gap-2 sm:gap-0'>
            <span className='bg-designColor text-gray-700 text-xs md:text-sm font-titleFont font-medium px-2 py-1 md:px-2 rounded-md flex items-center justify-center w-fit sm:w-auto'>
              Téléphone:
            </span>
            <span className='text-sm md:text-base text-right sm:text-left'>+225 0707007560</span>
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          {/* Email */}
          <p className='flex flex-col sm:flex-row sm:justify-between w-full text-base md:text-lg text-[#ccc] py-3 md:py-4 border-b-[1px] border-b-zinc-800 gap-2 sm:gap-0'>
            <span className='bg-designColor text-gray-700 text-xs md:text-sm font-titleFont font-medium px-2 py-1 md:px-2 rounded-md flex items-center justify-center w-fit sm:w-auto'>
              Email:
            </span>
            <span className='text-sm md:text-base text-right sm:text-left break-all'>drazakd@gmail.com</span>
          </p>
          {/* Disponibilité freelance */}
          <p className='flex flex-col sm:flex-row sm:justify-between w-full text-base md:text-lg text-[#ccc] py-3 md:py-4 border-b-[1px] border-b-zinc-800 gap-2 sm:gap-0'>
            <span className='bg-designColor text-gray-700 text-xs md:text-sm font-titleFont font-medium px-2 py-1 md:px-2 rounded-md flex items-center justify-center w-fit sm:w-auto'>
              Freelance:
            </span>
            <span className='text-sm md:text-base text-right sm:text-left'>Disponible</span>
          </p>
        </div>
      </div>
      
      {/* Section pour le formulaire de contact */}
      <div className='w-full mt-6 md:mt-10'>
        <Titre title="Envoyer" subTitle="Un Message" />
        
        <form className='p-4 md:p-6 flex flex-col gap-4 md:gap-6'>
          {/* Champs pour le nom et l'email */}
          <div className='w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 justify-between'>
            {/* Champ de saisie pour le nom du client */}
            <div className='w-full md:w-1/2'>
              <input 
                onChange={handleName}
                value={clientName}
                className={`${errClientName ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-3 md:py-2 text-sm md:text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 rounded-lg md:rounded-none`}
                type='text' 
                placeholder='Nom complet'
              />
              {errClientName && (
                <p className='text-red-500 text-xs mt-1'>Veuillez entrer votre nom</p>
              )}
            </div>
            {/* Champ de saisie pour l'email */}
            <div className='w-full md:w-1/2'>
              <input 
                onChange={handleEmail}
                value={email}
                className={`${errEmail ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-3 md:py-2 text-sm md:text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 rounded-lg md:rounded-none`}
                type='email' 
                placeholder='Email'
              />
              {errEmail && (
                <p className='text-red-500 text-xs mt-1'>Veuillez entrer un email valide</p>
              )}
            </div>
          </div>
          
          {/* Champ de saisie pour le message */}
          <div className='w-full'>
            <textarea 
              onChange={handleMessages}
              value={messages}
              className={`${errMessages ? "border-red-600 focus-visible:border-red-600" : "border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-3 md:py-2 text-sm md:text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 rounded-lg md:rounded-none`}
              cols="30" 
              rows="4"
              placeholder='Votre message...'
            ></textarea>
            {errMessages && (
              <p className='text-red-500 text-xs mt-1'>Veuillez entrer votre message</p>
            )}
          </div>
          
          {/* Bouton pour envoyer le message */}
          <div className='flex justify-center md:justify-start'>
            <button 
              onClick={handleSend} 
              className='text-sm md:text-base w-full md:w-44 flex items-center justify-center gap-1 text-gray-200 hover:text-designColor bg-opacity-10 hover:bg-opacity-20 py-3 md:py-2 px-2 rounded-lg md:rounded-none transition-all duration-300'
            >
              Envoyer Message 
              <span className='mt-1 text-designColor'><FiSend /></span>
            </button>
          </div>
          
          {/* Affichage du message de succès */}
          {successMsg && (
            <div className='text-green-500 text-center md:text-left text-sm md:text-base bg-green-500 bg-opacity-10 py-2 px-4 rounded-lg'>
              {successMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;