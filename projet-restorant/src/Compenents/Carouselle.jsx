import React,{useState} from "react";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import '../Compenents/Compenents.css';

const items = [
    {
    src: 'https://i0.wp.com/drinksdigest.com/wp-content/uploads/2021/10/Lana-Credit-Jiwon-Kim-10-1.jpg?fit=1200%2C400&ssl=1',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://www.digidistiller.com/cdn/shop/collections/liqueurs-822391.webp?v=1698136825',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://www.excelrecruitment.com/wp-content/uploads/2017/05/SPRINGTIME-1-1.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Carouselle(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carouselle;