import { motion } from 'framer-motion';
import './MusicWave.css';

const MusicWave = () => {
    // Floating music notes
    const notes = ['♪', '♫', '♬', '🎵', '🎶'];

    return (
        <section className="music-wave-section">
            <div className="music-wave-content">
                <motion.h2
                    className="wave-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Join The <span className="accent">Movement</span>
                </motion.h2>
                <motion.p
                    className="wave-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Thousands of artists trust us with their music
                </motion.p>
            </div>

            {/* Animated Wave Bars */}
            <div className="wave-bars">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="wave-bar"
                        animate={{
                            height: ['20%', '80%', '40%', '90%', '30%', '60%', '20%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Floating Notes */}
            <div className="floating-notes">
                {notes.map((note, i) => (
                    <motion.span
                        key={i}
                        className="floating-note"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{
                            y: [-20, -100, -20],
                            opacity: [0, 1, 0],
                            x: [0, Math.random() * 40 - 20, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: 'easeInOut',
                        }}
                        style={{ left: `${15 + i * 18}%` }}
                    >
                        {note}
                    </motion.span>
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="gradient-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>
        </section>
    );
};

export default MusicWave;
