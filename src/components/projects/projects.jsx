import { Slider } from "./slider/slider"
import { DesktopContainer, MobileContainer, ProjectsContainer, Slide, SlideText, SlideTextMobile } from "./styles"
import 'swiper/css/bundle'
import './slider/slider.css'
import { SwiperSlide } from "swiper/react"
import { data } from './data'
import { SectionsHeader } from '../sectionsHeader/sectionsHeader'

export const Projects = () => {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: true,
        pagination: {
            clickable: true
        },
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true
    }

    return (
        <ProjectsContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <DesktopContainer data-aos='fade-up' className='desktop'>
                <SectionsHeader h1={"Meus Projetos"} h2={''} />
                <Slider settings={settings} >
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
            </DesktopContainer>
            
            <MobileContainer data-aos='fade-down'  >
                <SectionsHeader h1={"Meus Projetos"} h2={''} className='header' />
                <Slider settings={settings} >
                    {
                        data.map(({ id, title, description, mobile, url }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <a href={url} key={id} target='_blank'>
                                        <Slide style={{ width: 'auto', maxWidth: 'auto', }}>
                                            <img src={mobile} alt={title} />
                                            <SlideTextMobile>
                                                <h2>{title}</h2>
                                                <p>{description}</p>
                                            </SlideTextMobile>
                                        </Slide>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Slider>
            </MobileContainer>
        </ProjectsContainer>
    )
}