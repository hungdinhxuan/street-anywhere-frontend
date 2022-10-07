import { Navigation } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { useState, useEffect, memo } from 'react';
import { AppIcon } from '../app-icon';
import styles from './styles.module.scss';

const AppMoveToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const handleMoveToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScrollingEvent = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener('scroll', handleScrollingEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollingEvent);
    };
  }, []);

  return (
    <>
      {isShow && (
        <Box className={styles.container}>
          <Fab color='primary' onClick={handleMoveToTop}>
            <AppIcon component={Navigation} color='#fff' />
          </Fab>
        </Box>
      )}
    </>
  );
};

export default memo(AppMoveToTop);