import "./Map.css";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.538276166566!2d78.8188614!3d10.7626211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d46e4b3652b%3A0x6c57ee566378d2d7!2sNITT%20Hospital!5e0!3m2!1sen!2sin!4v1703340423096!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="map"
      className="map"
    ></iframe>
  );
};

export default Map;
