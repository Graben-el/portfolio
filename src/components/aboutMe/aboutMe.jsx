import { SectionsHeader } from "../sectionsHeader/sectionsHeader"
import { AboutMeContainer, PictureContainer, ResumeContainer, TextContainer } from "./styles"

export const AboutMe = () => {
    return(
        <div style={{backgroundColor: '#c5c5c5'}}>
            
            <AboutMeContainer data-aos='fade-down' >
                <SectionsHeader h1={'Sobre Mim'} h2={''}/>
                <TextContainer>
                    <PictureContainer/>
                    <ResumeContainer>
                        <p>Tenho 26 anos, nascido em Mogi das Cruzes, SP. Possuo formação superior na área de Geologia pela Universidade Federal de Mato Grosso e, desde de Janeiro de 2022, venho empreendendo no desafio da transição de carreira para área de <span>Desenvolvimento Web Front-end</span>, estudando as principais tecnologias do ramo e em busca do primeiro emprego como desenvolvedor.</p>
                        <p>Sou uma pessoa <span>responsável</span>, <span>dedicada</span> ao meu trabalho, muito cuidadosa com <span>prazos</span>, relacionamentos profissionais e <span>atenta aos detalhes</span> do meu trabalho. Estou sempre disposto a adquirir novos conhecimentos que possam engrandecer meu ofício e aprimorar meus resultados e carreira. </p>
                        <p>Sou predominantemente introspectivo, porém muito <span>comunicativo</span> ao trabalhar em equipes, apresentar produtos, expor ideias e quando necessário. Gosto de <span>ajudar meus colegas</span> a aprender novas técnicas/conceitos, lido muito bem com <span>feedbacks</span> dos meus pares e busco sempre atender às expectativas. </p>
                    </ResumeContainer>
                </TextContainer>
            </AboutMeContainer>
        </div>
    )
}