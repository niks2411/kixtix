import { motion } from 'framer-motion';

const ChatBubbles = ({ messages }) => {
    return (
        <div className="chat-bubbles-container" style={{
            position: 'relative',
            padding: '4rem 2rem',
            maxWidth: '800px',
            margin: '0 auto',
        }}>
            {messages.map((message, index) => (
                <motion.div
                    key={message.title}
                    className={`chat-bubble ${index % 2 === 0 ? 'left' : 'right'}`}
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                        scale: 0.8
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                    }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100
                    }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        marginBottom: '2rem',
                    }}
                >
                    <motion.div
                        className="bubble-content"
                        whileHover={{ scale: 1.02 }}
                        style={{
                            maxWidth: '75%',
                            padding: '1.5rem 2rem',
                            background: index % 2 === 0
                                ? 'rgba(10, 15, 50, 0.9)'
                                : 'linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(18, 140, 126, 0.2) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid',
                            borderColor: index % 2 === 0
                                ? 'rgba(196, 255, 60, 0.15)'
                                : 'rgba(37, 211, 102, 0.3)',
                            borderRadius: index % 2 === 0
                                ? '20px 20px 20px 4px'
                                : '20px 20px 4px 20px',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <div className="bubble-header" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '0.75rem',
                        }}>
                            <h4 className="bubble-title" style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: index % 2 === 0 ? '#fff' : '#25D366',
                                margin: 0,
                            }}>
                                {message.title}
                            </h4>
                        </div>
                        <p className="bubble-text" style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            color: 'rgba(255, 255, 255, 0.75)',
                            margin: 0,
                        }}>
                            {message.content}
                        </p>
                    </motion.div>

                    {/* Typing indicator animation for some messages */}
                    {index % 3 === 2 && (
                        <motion.div
                            className="typing-indicator"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: 0.5
                            }}
                            style={{
                                display: 'flex',
                                gap: '4px',
                                marginTop: '8px',
                                marginLeft: index % 2 === 0 ? '12px' : 'auto',
                                marginRight: index % 2 === 0 ? 'auto' : '12px',
                            }}
                        >
                            {[1, 2, 3].map((dot) => (
                                <motion.div
                                    key={dot}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: dot * 0.1,
                                    }}
                                    style={{
                                        width: '6px',
                                        height: '6px',
                                        background: 'rgba(37, 211, 102, 0.6)',
                                        borderRadius: '50%',
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default ChatBubbles;
