
import BikeCategories from "@/components/BikeCategories";
import { client } from "../lib/sanity";


const getData = async () => {
    const query = `*[_type == 'product']{

        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]-> {
          name
          }
        
      
        
      }`;
      const data = await client.fetch(query);
      return data;
}

const OurBikes = async () => {
    const bikes = await getData();
    // console.log(bikes);
  return (
    <div>
        <BikeCategories bikes={bikes}/>
    </div>
  )
}

export default OurBikes