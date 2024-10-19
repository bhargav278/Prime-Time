import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "./SlideCard";
import Button from "./Button";
import { Link } from "react-router-dom";
import { SelectionContext } from "../Context/SelectionContext";
import { useContext, } from "react";
import CardShowCaseSkeleton from "./Skeletons/CardShowCaseSkeleton";

export default function CardShowcase({ information, title }) {

    let value = 1;

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 300, // Tailwind's "sm" breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            },

            {
                breakpoint: 640, // Tailwind's "sm" breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024, // Tailwind's "md" breakpoint
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
        ]
    };

    const { nowPlayingValue, topRated, popularValue, tranding } = useContext(SelectionContext);




    function findValue() {
        if (title === "Top Rated") {
            if (topRated === "Movies") {
                value = 1
            }
            else {
                value = 0
            }
        }
        if (title === "Now Playing") {
            if (nowPlayingValue === "Movies") {
                value = 1
            }
            else if (nowPlayingValue === "TVShows") {
                value = 0;
            }
        }
        if (title === "Popular") {
            if (popularValue === "Movies") {
                value = 1;
            }
            else if (popularValue === "TVShows") {
                value = 0;
            }
        }
        if (title === "Tranding") {
            if (tranding === "Movies") {
                value = 1;
            }
            else if (tranding === "TVShows") {
                value = 0;
            }
        }
    }

    findValue();




    // console.log(information);
    return (information) ?
        (
            <div className=" sm:mx-10 mb-10 px-7 sm:px-10">

                <div className="flex justify-between items-center py-10">
                    <div className="text-xl sm:text-3xl">{title}</div>
                    <div className="flex  flex-col sm:flex-row  gap-1 sm:w-auto sm:gap-6">
                        <Button value="Movies" title={title} />
                        <Button value="TVShows" title={title} />
                    </div>

                </div>

                <Slider {...settings} className="flex justify-center items-center w-11/12 mx-auto">
                    {
                        information.map((ele) => <Link key={ele.id} to={`watch/${value}/${ele.id}`} ><SlideCard data={ele} /></Link>)
                    }
                </Slider>

            </div>
        ) :
        <CardShowCaseSkeleton />
}
