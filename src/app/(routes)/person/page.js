'use client'

import Card from "@/components/card.js";
import api from "@/services/api.js";
import { useEffect, useState } from "react";
import Heading from "@/components/heading.js";
import styles from '@/app/(routes)/layout.module.css';

export default function Person() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
      api.get('/person')
      .then((res) => setPeople(res.data))
      .catch((error) => console.error(error));
    }, []);

    return (
      <div className={styles.section}>
        <Heading category={'People'} />
        <div className={styles.cards}>
          {people.map((person) => (
            <Card key={person.id} title={person.name} image={`http://localhost:1337${person.photo_link}`} />
          ))}
        </div>
      </div>
    );
}
