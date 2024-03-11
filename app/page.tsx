'use client';
import { Reorder } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <main>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </main>
  );
}
