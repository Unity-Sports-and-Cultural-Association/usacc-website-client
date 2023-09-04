import React, { ReactElement, useState, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './Carousel.scss';

type CarouselProps = {
    image: object[];
    title: string;
    capacity: string;
    description: string;
}
function Carousel({ image, title, capacity, description }: CarouselProps): ReactElement {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0);
    const itemsRef = useRef<Map<number, HTMLImageElement> | null>(null);

    const handlePrevButton = (): void => {
        if (currentIndex == 0) {
            setCurrentIndex(image.length - 1);
            scrollToId(image.length - 1);
        } else {
            scrollToId(currentIndex - 1);
            setCurrentIndex( currentIndex - 1 );
        }
    };
    const handleNextButton = (): void => {
        if (currentIndex == image.length - 1) {
            setCurrentIndex(0);
            scrollToId(0);
        } else {
            scrollToId(currentIndex + 1);
            setCurrentIndex( currentIndex + 1 );
        }
    };

    const dotClickTo = (index: number): void => {
        setCurrentIndex(index);
        scrollToId(index);
    };

    function scrollToId(itemId: number): void {
        const map = getMap();
        if (map) {
            const node = map.get(itemId);
            node?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }

    function getMap(): Map<number, HTMLImageElement> | null {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <div className='carousel-container'>
            <div className='carousel-gallery-container'>
                <div className='carousel-frame-container'>
                    {
                        image.map((key: object, index: number) => <img key={index} src={`${key}`} alt='err' className='carousel-image'
                            ref={
                                (imgObject): void => {
                                    const map = getMap();
                                    //if the imgObject is not empty then execute
                                    if (imgObject) {
                                        map?.set(index, imgObject);
                                    }
                                }
                            }
                        />)
                    }
                </div>
                <div className='carousel-gallery-control-container'>
                    <div className='carousel-gallery-button-container'>
                        <div className='carousel-gallery-left-button-container' onClick={handlePrevButton}>
                            <SlArrowLeft className='carousel-gallery-left-button'/>
                            <div className='carousel-gallery-left-button-cover'/>
                        </div>
                        <div className='carousel-gallery-right-button-container' onClick={handleNextButton}>
                            <SlArrowRight className='carousel-gallery-right-button'/>
                            <div className='carousel-gallery-right-button-cover'/>
                        </div>
                    </div>
                    <div className='carousel-dot-container'>
                        {
                            [ ...Array(image.length).keys() ].map((key) => (
                                <div key={key} className={key == currentIndex ? 'carousel-current-dot' : 'carousel-dot'} onClick={(): void => dotClickTo(key)}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='carousel-title-container'>{title}</div>
            <div className='carousel-capacity-container'>{capacity}</div>
            <div className='carousel-description-container'>{description}</div>
        </div>
    );
}

export default Carousel;
