import { Slider } from "./slider/slider"
import { ProjectsContainer, Slide, SlideText } from "./styles"
import 'swiper/css/bundle'
import './slider/slider.css'
import { SwiperSlide } from "swiper/react"
import { data } from './data'
import { SectionsHeader } from '../sectionsHeader/sectionsHeader'

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
        <ProjectsContainer data-aos='fade-down' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <SectionsHeader h1={"Meus Projetos"} h2={''} className='header'/>
            <Slider settings={settings}>
                {
                    data.map(({ id, title, description, src, url }) => {
                        return (
                            <SwiperSlide key={id}>
                                <a href={url} key={id} target='_blank'>
                                    <Slide>
                                        <img src={src} alt={title} />
                                        <SlideText>
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                        </SlideText>
                                    </Slide>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Slider>
        </ProjectsContainer>
    )
}