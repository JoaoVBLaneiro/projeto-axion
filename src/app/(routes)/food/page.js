'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/card.js';
import api from '@/services/api.js';
import Heading from '@/components/heading.js';
import styles from '@/app/(routes)/layout.module.css';

const Food = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    api.get('/foods')
      .then(response => setFoods(response.data))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  return (
    <div className={styles.section}>
      <Heading category="Foods"/>
      <div className={styles.cards}>
          {foods.map((food) => (
            <Card key={food.id} title={food.name} image={`http://localhost:1337${food.link}`}/>
          ))}
        </div>
    </div>
  );
};

export default Food;
