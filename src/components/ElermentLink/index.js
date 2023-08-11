import classNames from "classnames";
import style from "./elementLink.module.scss";

export default function ElementLink(props) {
  const {
    elementData: {
      textMenu,
      elementLink: { textLink, hrefLink },
      classNames: { subMenu, paddingNone, paddingTopNone },
    },
  } = props;

  const className = classNames({
    [style.aDecoration]: true,
    [style.paddingNone]: paddingNone,
    [style.paddingTopNone]: paddingTopNone,
    [style.subMenu]: subMenu,
  });

  const classNameSpan = classNames({
    [style.li]: !subMenu,
  });

  const elemLink = (
    <a href={hrefLink} className={className}>
      {textLink}
    </a>
  );

  return textMenu ? (
    <p className={classNameSpan}>
      {textMenu} {elemLink}
    </p>
  ) : (
    <>{elemLink}</>
  );
}
