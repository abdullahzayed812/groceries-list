import "./Footer.css";

export function Footer({ length }) {
  return (
    <footer>
      <h2>
        {length} List {length > 1 ? "Items" : "Item"}
      </h2>
    </footer>
  );
}
