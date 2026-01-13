import glassStyles from "../../glass.module.css";
import styles from "./GlassButton.module.css";

export default function GlassButton({
  children,
  padding = true,
  layout = true,
  textStyle = true,
  as: Component = "button",
  className = "",
  ...props
}) {
  const classes = [
    glassStyles.glassButton,
    padding && styles.padding,
    layout && styles.layout,
    textStyle && styles.textStyle,
    className
  ].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}