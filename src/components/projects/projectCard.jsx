import { CardMask, Card } from "./styles"
import foto from '../../assets/imagens/projetos/electrum.png'

export const ProjectCard = () => {
    
    return (
        <CardMask>
            <Card>
                <div>
                    <h2>
                        Electrum
                    </h2>
                    <p>
                        Página construída utilizando pré-processador SASS, aplicando o conceito de arquitetura SMACSS e diretivas @use...
                    </p>
                </div>
            </Card>
        </CardMask>
    )
}

