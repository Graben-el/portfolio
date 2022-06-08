import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/bundle'
import { A11y, Pagination, Navigation, EffectFlip } from "swiper"

export const Slider = ({ settings, children }) => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y, EffectFlip]} {...settings}>
            { children }
        </Swiper>
    )
}