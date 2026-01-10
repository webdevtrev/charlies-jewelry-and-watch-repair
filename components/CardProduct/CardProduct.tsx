import styles from "./CardProduct.module.css";
export default function CardProduct({
  title,
  description,
  imageSrc,
  imageAlt,
  price,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
}) {
  function formatPrice(price: string) {
    const num = Number(price);
    if (isNaN(num)) return price;
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={imageSrc} alt={imageAlt} />
        <span>{formatPrice(price)}</span>
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
