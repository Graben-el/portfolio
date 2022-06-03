import { Divider, SubTitle, Title } from "./styles"

export const SectionsHeader = ({ h1, h2 }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Title>
                {h1}
            </Title>
            {
                h2.length > 0 ?
                <>
                    <SubTitle>
                        {h2}
                    </SubTitle>
                    <Divider />
                </>
                :
                <Divider />
            }
        </div>
    )
}