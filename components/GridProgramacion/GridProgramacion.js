import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
//import styles from './Products.module.css';
import { useRouter } from 'next/router';
// import styles from './Grid.module.css';
import Card from '../Card/Card';

const GridProgramacion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const [proyProg, setProyProg] = useState('');

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`projects`);
        const itemSnapshot = await itemsCollection.get();

        const categoryItems = db.collection(`category`);
        const categorySnapshot = await categoryItems.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(items);
        const categories = categorySnapshot.docs.map((doc)=>{
          return { id: doc.id, ...doc.data()};
        });
        console.log(categories);
        setProducts(items);
        setLoading(false);
        setCategories(categories);
        
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const getCategoryName = (catId) => categories.find((item) => item.id === catId)?.description;

  return (
    <>
      <div className={`grid inner`}>
        {!loading &&
          products.map(({ id, title, student, catId, ano, img, desc }) => (
            <div key={id} className={`col_4`}>
              <Card title={title} id={id} student={student} img={img} ano={ano} desc={desc} catDescription={getCategoryName(catId)}/>
            </div>
          ))}
        {loading && <p className={`col_12`}>Loading...</p>}
      </div>
    </>
  );
};

export default GridProgramacion;
