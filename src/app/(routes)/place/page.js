'use client'

import Card from "@/components/card.js";
import api from "@/services/api.js";
import { useEffect, useState } from "react";
import Heading from "@/components/heading.js";
import styles from '@/app/(routes)/layout.module.css';

export default function Place() {
    const [places, setPlaces] = useState([]);
    
    useEffect(() => {
      api.get('/place')
      .then((res) => setPlaces(res.data))
      .catch((error) => console.error(error));
    }, []);

    return (
      <div className={styles.section}>
        <Heading category={'Places'} />
        <div className={styles.cards}>
          {places.map((place) => (
            <Card key={place.id} title={place.name} image={`http://localhost:1337${place.photo_link}`} />
          ))}
        </div>
      </div>
    );
}
