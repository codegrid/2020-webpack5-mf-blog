import React from 'react';

const Header = React.lazy(() => import("www/Header"));
import styles from '../assets/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <React.Suspense fallback="Loading Header">
          <Header isBlog={true} />
        </React.Suspense>
        <main className={styles.container}>
          <div className={styles.contents}>
            <h1 className={styles.title}>ブログ</h1>
          </div>
        </main>
      </>
    );
  }
}
