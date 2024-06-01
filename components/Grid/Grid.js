import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import styles from './Grid.module.css';
import Card from '../Card/Card';

const Grid = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
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
        setFilteredProjects(items);
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredProjects(filtered);
  }, [searchQuery, projects]);

  const goToProject = (id) => router.push(`/cardsProjects/${id}`);

  const getCategoryName = (catId) =>
    categories.find((item) => item.id === catId)?.description;

  return (
    <>
      <div className={styles.searchBar} style={{ marginLeft: '2em' }}>
        <input
          style={{ width: '30%', height: '2em' }}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por título..."
        />
      </div>
      <div className={`grid inner`} style={{ margin: '0 2em' }}>
        {!loading &&
          filteredProjects.map(
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

export default Grid;
