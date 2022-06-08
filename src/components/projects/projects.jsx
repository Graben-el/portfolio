import { Slider } from "./slider/slider"
import { ProjectsContainer, Slide, SlideText } from "./styles"
import 'swiper/css/bundle'
import './slider/slider.css'
import { SwiperSlide } from "swiper/react"
import { data } from './data'

export const Projects = () => {
    const settings = {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: true,
        pagination: {
            clickable: true
        },
        loop: true
    }

    return (
        <ProjectsContainer>
            <Slider settings={settings}>
                {
                    data.map(({ id, title, description, src }) => {
                        return (
                            <SwiperSlide key={id}>
                                <Slide>
                                    <img src={src} alt={title} />
                                    <SlideText>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </SlideText>
                                </Slide>
                            </SwiperSlide>
                        )
                    })
                }
            </Slider>
        </ProjectsContainer>
    )
}