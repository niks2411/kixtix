import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneMockup = ({ messages }) => {
    const [visibleMessages, setVisibleMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (currentIndex >= messages.length) {
            // Reset after showing all messages
            const resetTimer = setTimeout(() => {
                setVisibleMessages([]);
                setCurrentIndex(0);
            }, 3000);
            return () => clearTimeout(resetTimer);
        }

        // Show typing indicator
        setIsTyping(true);
        const typingTimer = setTimeout(() => {
            setIsTyping(false);
            // Add the message
            setVisibleMessages(prev => [...prev, messages[currentIndex]]);
            setCurrentIndex(prev => prev + 1);
        }, 1500);

        return () => clearTimeout(typingTimer);
    }, [currentIndex, messages]);

    return (
        <div className="phone-mockup-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
        }}>
            {/* Phone Frame */}
            <motion.div
                className="phone-frame"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    width: '320px',
                    height: '640px',
                    background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
                    borderRadius: '40px',
                    padding: '12px',
                    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                    position: 'relative',
                }}
            >
                {/* Phone Screen */}
                <div className="phone-screen" style={{
                    width: '100%',
                    height: '100%',
                    background: '#ECE5DD',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {/* WhatsApp Header */}
                    <div className="whatsapp-header" style={{
                        background: '#075E54',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>
                            K
                        </div>
                        <div>
                            <div style={{ color: '#fff', fontWeight: '600', fontSize: '1rem' }}>
                                Kixtix Media
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                                Online
                            </div>
                        </div>
                    </div>

                    {/* Chat Background */}
                    <div className="chat-container" style={{
                        flex: 1,
                        padding: '16px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23128C7E\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }}>
                        {/* Initial Bot Message */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{
                                alignSelf: 'flex-start',
                                maxWidth: '80%',
                            }}
                        >
                            <div style={{
                                background: '#fff',
                                padding: '10px 14px',
                                borderRadius: '0 16px 16px 16px',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
                                    👋 Welcome to Kixtix Media! How can we help grow your business today?
                                </p>
                                <span style={{ fontSize: '0.7rem', color: '#999', float: 'right', marginTop: '4px' }}>
                                    10:30 AM
                                </span>
                            </div>
                        </motion.div>

                        {/* Dynamic Messages */}
                        <AnimatePresence>
                            {visibleMessages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: msg.isUser ? 20 : -20, y: 10 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
                                        maxWidth: '80%',
                                    }}
                                >
                                    <div style={{
                                        background: msg.isUser ? '#DCF8C6' : '#fff',
                                        padding: '10px 14px',
                                        borderRadius: msg.isUser ? '16px 0 16px 16px' : '0 16px 16px 16px',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    }}>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
                                            {msg.text}
                                        </p>
                                        <span style={{ fontSize: '0.7rem', color: '#999', float: 'right', marginTop: '4px' }}>
                                            {msg.time} {msg.isUser && '✓✓'}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Typing Indicator */}
                        <AnimatePresence>
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        alignSelf: 'flex-start',
                                        background: '#fff',
                                        padding: '12px 18px',
                                        borderRadius: '16px',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {[0, 1, 2].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Infinity,
                                                    delay: i * 0.15,
                                                }}
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: '#25D366',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input Bar */}
                    <div className="input-bar" style={{
                        background: '#F0F0F0',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        <div style={{
                            flex: 1,
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '10px 16px',
                            fontSize: '0.85rem',
                            color: '#999',
                        }}>
                            Type a message...
                        </div>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#25D366',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                        }}>
                            ▶
                        </div>
                    </div>
                </div>

                {/* Phone Notch */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '24px',
                    background: '#0f0f1a',
                    borderRadius: '12px',
                }} />
            </motion.div>

            {/* Floating Chat Bubbles Outside Phone */}
            <div className="floating-bubbles" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}>
                {[
                    { text: '800M+ Users', x: -180, y: -150, delay: 0 },
                    { text: '98% Delivery', x: 160, y: -100, delay: 0.3 },
                    { text: 'Bulk Messaging', x: -150, y: 100, delay: 0.6 },
                    { text: 'High Open Rate', x: 180, y: 150, delay: 0.9 },
                ].map((bubble, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: bubble.delay + 0.5, type: 'spring' }}
                        animate={{ y: [0, -10, 0] }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${bubble.x}px), calc(-50% + ${bubble.y}px))`,
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            color: '#fff',
                            padding: '10px 18px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {bubble.text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PhoneMockup;
