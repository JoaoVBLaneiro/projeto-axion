'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/card.js';
import api from '@/services/api.js';
import Heading from '@/components/heading.js';
import styles from '@/app/(routes)/layout.module.css';

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api.get('/places')
      .then(response => setPlaces(response.data))
      .catch(error => console.error('Error fetching places data:', error));
  }, []);

  return (
    <div className={styles.section}>
      <Heading category="Places"/>
      <div className={styles.cards}>
          {places.map((place) => (
            <Card key={place.id} title={place.name} image={`http://localhost:1337${place.link}`}/>
          ))}
      </div>
    </div>
  );
};

export default Places;
