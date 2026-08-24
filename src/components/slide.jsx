import Carousel from 'react-bootstrap/Carousel';
import imager from '../assets/images/1st slide pic.webp'
import images from '../assets/images/2nd slide pic.webp'
import imagem from '../assets/images/3rd slide pic.webp'


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={imager} alt="" width={'100%'} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={images} alt="" width={'100%'} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagem} alt="" width={'100%'} />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;