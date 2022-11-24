import './App.css';
import CarComponent from './CarNameChild';

const cars = [
    {owner: 'A', carColor: 1, carYear: 'x', carBrand: 'Brand1', id: 1},
    {owner: 'B', carColor: 2, carYear: 'y', carBrand: 'Brand1', id: 2},
    {owner: 'C', carColor: 3, carYear: 'z', carBrand: 'Brand1', id: 3}
]

function CarApp() {
    return (
      <>
        {
          cars.map((item) => {
            return <CarComponent car={item} key={item.id} />
          })
        }
      </>
    );
  }
  
  export default CarApp;
  
