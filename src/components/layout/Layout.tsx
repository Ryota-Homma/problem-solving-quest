import s from "./Layout.module.scss";

type Props = {
  children: React.ReactNode[];
};

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={s["wrap"]}>
      {children}

      <span className={s["copyright"]}>
        <span className={s["copyright__icon"]}>&copy;</span>
        <span className={s["copyright__text"]}> 2023 </span>
        Y's inc.
      </span>
    </div>
  );
};

export default Layout;
