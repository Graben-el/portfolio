import { AboutMeContainer, TextContainer } from "./styles"

export const AboutMe = () => {
    return(
        <div style={{backgroundColor: '#c5c5c5'}}>
            <AboutMeContainer>
                <h1>Sobre Mim</h1>
                <h2>Por que me <span>contratar</span>?</h2>
                <TextContainer/>
            </AboutMeContainer>
        </div>
    )
}