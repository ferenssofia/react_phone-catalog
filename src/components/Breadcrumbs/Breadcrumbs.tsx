import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <Link to="/" className={styles.breadcrumbs__link}>
        <img
          src="/img/icons/Home.svg"
          alt="Home"
          className={styles.breadcrumbs__homeIcon}
        />
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <React.Fragment key={name}>
            <span className={styles.breadcrumbs__arrow}>&gt;</span>
            {isLast ? (
              <span className={styles.breadcrumbs__current}>
                {formattedName}
              </span>
            ) : (
              <Link to={routeTo} className={styles.breadcrumbs__link}>
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
