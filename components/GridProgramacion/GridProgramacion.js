import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import Card from '../Card/Card';

const GridProgramacion = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategoryName = (catId) =>
    categories.find(({ id }) => id === catId)?.description;

  const getProjectsByCategory = (categoryId) => {
    return projects.filter(({ catId }) => catId === categoryId);
  };

  useEffect(() => {
    setLoading(true);
    const getProjects = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`projects`);
        const itemSnapshot = await itemsCollection.get();

        const categoryItems = db.collection(`category`);
        const categorySnapshot = await categoryItems.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        const categories = categorySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProjects(items);
        setLoading(false);
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <div className={`grid inner`} style={{ margin: '0 2em' }}>
        {!loading &&
          getProjectsByCategory('06qtRnl2dvkbd1d020E2').map(
            ({ id, title, student, catId, ano, img, desc }) => (
              <div key={id} className={`col_4`}>
                <Card
                  title={title}
                  id={id}
                  student={student}
                  img={img}
                  ano={ano}
                  desc={desc}
                  catDescription={getCategoryName(catId)}
                />
              </div>
            ),
          )}
        {loading && <p className={`col_12`}>Loading...</p>}
      </div>
    </>
  );
};

export default GridProgramacion;
