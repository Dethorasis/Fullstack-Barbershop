import { useEffect, useState } from 'react';
import { getServices } from '../apis/services';
import { Services } from '../../models/Services';

function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    async function loadServices() {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        // Handle the error if needed
      }
    }

    loadServices();
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.name}>{service.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
