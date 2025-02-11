'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/card.js';
import api from '@/services/api.js';
import Heading from '@/components/heading.js';
import styles from '@/app/(routes)/layout.module.css';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    api.get('/people')
      .then(response => setPeople(response.data))
      .catch(error => console.error('Error fetching people data:', error));
  }, []);

  return (
    <div className={styles.section}>
      <Heading category="People"/>
      <div className={styles.cards}>
          {people.map((person) => (
            <Card key={person.id} title={person.name} image={`http://localhost:1337${person.link}`}/>
          ))}
      </div>
    </div>
  );
};

export default People;
