import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text } from "../constants";

export default function CreativeSwiper({items} : {items: Array<{text: string, color: string, textColor: string}>}) {
    return (
        <>
        <Swiper
            grabCursor={true}
            effect={'creative'}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
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
            className="mySwiper6 m-[100px_auto] w-[80vw] lg:w-[520px] h-[290px]"
        >
            {
                items.map( (itm, idx) => {
                    return (
                        <SwiperSlide style={{fontSize: text.logo, backgroundColor: itm.color, color: itm.textColor}} className="flex items-center justify-center text-white relative top-[-50px] pt-[50px]">{itm.text}</SwiperSlide>
                    )
                })
            }
        </Swiper>
        </>
    )
}