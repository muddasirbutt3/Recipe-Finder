import React from 'react'
import styles from './Favorite.module.css'
import Card from '../../components/Card/Card'

function Favorite({favRecipe,data}) {
    // useEffect(() => {
      let ids = favRecipe.join(',')
    //     // axios.get(`${BaseURL}informationBulk?ids${ids}=&apiKey=${apiKey}`)
    //     // .then((res) => {
    //     //   setLoading(false)
    //     //   setData(res.data.results)
    //     //   console.log(res.data.results)
    //     // })
    //     setTimeout(() => {
    //       setLoading(false);
    //       // setData(res.data.results);
    //       // setData(response.data);
    //     }, 2000);
    //   }, []);
  return (
    <div>
        <div className={styles.cards}>
        {data.map((recipe) =>
          <Card info={recipe} key={recipe.id}  />
        )}
      </div>
    </div>
  )
}

export default Favorite