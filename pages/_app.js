import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ duration: 0.5,}}
        variants={{
          pageInitial: {
            backgroundColor: '#444444',
            transform: ' translateY(-100vh)'
            // opacity: 0,
            // transform: 'translateX(-100vw)',
            
            
          },
          pageAnimate: {
           
            transform: ' translateY(0vh)',
            backgroundColor: '#1d1d1d',
          },
          pageExit:{
            backgroundColor: '#444444',
            // filter: 'invert()',
            // opacity: 0,
            transform: ' translateY(100vh)'
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
