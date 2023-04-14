import "./style/home.css";
import { Container, Button, Image } from "react-bootstrap";

const Home = () => {
  const image = "./images/image-home.png";
  return (
    <div className="container-1">
      <Container expand="md">
        <h1 className="h1-container-1">WBCLOTH</h1>
        <p className="p-container-1">
          Brand Lokal Yang Memiliki Design Yang Tidak Kalah Menarik Dengan
          Produk Luar
        </p>
        <Button
          className="btn-container-1"
          variant="outline-dark"
          style={{
            color: "white",
            background: "black",
            fontSize: "20px",
            width: "38%",
            maxWidth: "100%",
            textAlign: "center",
            alignItems: "center",
            padding: "1rem 2rem",
            marginBottom: "20px",
          }}
          size="lg"
          href="/product"
        >
          View Product
        </Button>
        <br />
        <Image src={image} alt="images" className="img-container-1" />
      </Container>
    </div>
  );
};
export default Home;
