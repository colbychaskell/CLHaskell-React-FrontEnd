import Container from 'react-bootstrap/Container'

const TitledSection = ({ title, children, props}) => (
  <Container fluid className='pt-5 px-5'>
    <h1>{title}</h1>
        {children}
  </Container>
)

export default TitledSection