import CardRounded from '../CardRounded/CardRounded';
import styles from './ColumnNosotros.module.css';
import { useEffect, useState, useContext } from 'react';
import { getFirestore } from '../../utils/firebase';

const ColumnNosotros = () => {
  const [favProyects, setFavProyects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProyects = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`members`);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setFavProyects(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProyects();
  }, []);
  return (
    <div className={`is-widescreen my-6 ${styles['containercolumn']}`}>
      <div
        className={`columns is-multiline is-justify-content-center ${styles['columnspecial']}`}
      >
        {!loading &&
          favProyects.map((member, index) => {
            return (
              <div
                key={index}
                className={`column is-one-third ${styles['divrounded']}`}
              >
                <CardRounded
                  img={member.img}
                  name={member.name}
                  rol={member.rol}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ColumnNosotros;
