const LOG_LEVEL = {
    silent: -1,
    error: 0,
    warn: 1,
    info: 2
};
const logger = {
    level: 'info',
    info (...messages) {
        if (LOG_LEVEL.info > LOG_LEVEL[logger.level]) return;
        console.info(...messages);
    },
    warn (...messages) {
        if (LOG_LEVEL.warn > LOG_LEVEL[logger.level]) return;
        console.warn(...messages);
    },
    error (...messages) {
        if (LOG_LEVEL.error > LOG_LEVEL[logger.level]) return;
        console.error(...messages);
    }
};
export { logger };
