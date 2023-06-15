import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contact, setContact] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);
        setContact(contactData);
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }
    loadContact();
  }, [id, history]);

  const handleSubmit = () => {
    //
  };
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title="Editar Mateus Silva"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
        contact={contact}
      />
    </>
  );
}
