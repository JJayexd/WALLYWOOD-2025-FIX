import { Container } from "../Container/Container";

export const ContentWrapper = ({ pagetitle, children }) => {

    document.title = pagetitle;

    return (
        <div>
            <Container className="blackbox">
                <Container className="center">
                    <h1>{pagetitle}</h1>
                </Container>
            </Container>
            <Container className="center">
                {children}
            </Container>
        </div>
    )
}