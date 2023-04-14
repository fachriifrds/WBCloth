import "./style/payment.css";
import { Form, Button } from "react-bootstrap/";
import { useState, useEffect } from "react";

const Payment = () => {
  // const linkWa = "https://api.whatsapp.com/send?phone=083838632667&text={tset}"
  const linkIg =
    "https://www.instagram.com/direct/t/340282366841710300949128284411925753116";
  // const pullName =

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");
  const [series, setSeries] = useState("");

  // Get the values from local storage if they exist
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedPhone = localStorage.getItem("phone");
    const storedAlamat = localStorage.getItem("alamat");
    const storedType = localStorage.getItem("type");
    const storedSize = localStorage.getItem("size");
    const storedPayment = localStorage.getItem("payment");
    const storedSeries = localStorage.getItem("series");

    if (storedName) {
      setName(storedName);
    }
    if (storedPhone) {
      setPhone(storedPhone);
    }
    if (storedAlamat) {
      setAlamat(storedAlamat);
    }
    if (storedType) {
      setType(storedType);
    }
    if (storedSize) {
      setSize(storedSize);
    }
    if (storedPayment) {
      setPayment(storedPayment);
    }
    if (storedSeries) {
      setSeries(storedSeries);
    }
  }, []);
  const waLink =
    "https://api.whatsapp.com/send?phone=083838632667&text=&app_absent=2" +
    encodeURIComponent(
      "Halo, saya ingin memesan " +
        type +
        " " +
        series +
        " ukuran " +
        size +
        " dengan metode pembayaran " +
        payment +
        " atas nama " +
        name +
        " dan alamat " +
        alamat
    );
  // Store the input values in local storage when they change
  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    localStorage.setItem("phone", e.target.value);
  };
  const handleAlamatChange = (e) => {
    setAlamat(e.target.value);
    localStorage.setItem("alamat", e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
    localStorage.setItem("Type", e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
    localStorage.setItem("Size", e.target.value);
  };
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
    localStorage.setItem("Payment", e.target.value);
  };
  const handleSeriesChange = (e) => {
    setSeries(e.target.value);
    localStorage.setItem("Series", e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as send it to a server
  };

  return (
    <div className="container-4">
      <Form onSubmit={handleSubmit}>
        <div className="input-group-container-4">
          <Form.Group className="mb-3 group-container-4 ">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Nama
            </Form.Label>
            <Form.Control
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              placeholder="Namamu"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Nomer Telepon
            </Form.Label>
            <Form.Control
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              placeholder="Nomor HPmu"
              type="number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </Form.Group>
        </div>
        <div className="input-group-container-4">
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Alamat
            </Form.Label>
            <Form.Control
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              placeholder="Alamatmu"
              type="text"
              value={alamat}
              onChange={handleAlamatChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Tipe
            </Form.Label>
            <Form.Select
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              value={type}
              onChange={handleTypeChange}
            >
              <option>Hoodie</option>
              <option>T-Shirt</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="input-group-container-4">
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Series
            </Form.Label>
            <Form.Select
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              value={series}
              onChange={handleSeriesChange}
            >
              <option>Negative Series</option>
              <option>Poseidon Series</option>
              <option>Universe Series</option>
              <option>Monalen Series</option>
              <option>The Flat Earth Series</option>
              <option>Butterfloe Series</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Size
            </Form.Label>
            <Form.Select
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              value={size}
              onChange={handleSizeChange}
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="input-group-container-4">
          <Form.Group className="mb-3 group-container-4">
            <Form.Label
              style={{ color: "white", textShadow: "2px 1px 3px black" }}
            >
              Pembayaran
            </Form.Label>
            <Form.Select
              style={{
                background: "rgba(37, 37, 37, 0.9)",
                border: "none",
                color: "white",
                width: "35rem",
                maxWidth: "100%",
                padding: "0.8rem",
              }}
              value={payment}
              onChange={handlePaymentChange}
            >
              <option>COD</option>
              <option>BCA</option>
              <option>BNI</option>
              <option>GOPAY</option>
              <option>DANA</option>
              <option>SHOPEEPAY</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="btn-group-container-4">
          <Button
            type="submit"
            style={{
              padding: "1rem 2rem",
              margin: "0.5rem",
              background: "rgba(37, 37, 37, 1)",
              border: "none",
              fontSize: "15px",
            }}
            expand="md"
            className="btn-container-4"
          >
            Save
          </Button>
          <Button
            href={waLink}
            style={{
              padding: "1rem 2rem",
              margin: "0.5rem",
              background: "rgba(37, 37, 37, 1)",
              border: "none",
              fontSize: "15px",
            }}
            className="btn-container-4"
          >
            Checkout Whatsapp
          </Button>
          <Button
            href={linkIg}
            style={{
              padding: "1rem 2rem",
              margin: "0.5rem",
              background: "rgba(37, 37, 37, 1)",
              border: "none",
              fontSize: "15px",
              textAlign: "center",
            }}
            className="btn-container-4"
          >
            Checkout Instagram
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Payment;
