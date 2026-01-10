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
  return (
    <div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} />
        <span>{price}</span>
      </div>
      <div className={styles.productDetails}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
