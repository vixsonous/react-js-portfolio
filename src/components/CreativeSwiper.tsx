import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text } from "../constants";
import React from "react";

export default function CreativeSwiper({items} : {items: Array<{text: string, color: string, textColor: string, svg: React.ReactNode}>}) {
    return (
        <React.Fragment>
        <Swiper
            grabCursor={true}
            effect={'creative'}
            loop
            creativeEffect={{
            prev: {
                shadow: true,
                origin: 'left center',
                translate: ['-5%', 0, -200],
                rotate: [0, 100, 0],
            },
            next: {
                origin: 'right center',
                translate: ['5%', 0, -200],
                rotate: [0, -100, 0],
            },
            }}
            modules={[EffectCreative, Pagination]}
            className="mySwiper6 m-[100px_auto] w-[80vw] lg:w-[520px] h-[290px] rounded-lg"
        >
            {
                items.map( (itm, idx) => {
                    return (
                        <SwiperSlide key={idx} style={{fontSize: text.logo, backgroundColor: itm.color, color: itm.textColor}} className="flex items-center justify-center gap-[10px] text-white relative top-[-50px] pt-[50px]">
                            <span>{itm.text}</span>
                            <span>{itm.svg}</span>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </React.Fragment>
    )
}